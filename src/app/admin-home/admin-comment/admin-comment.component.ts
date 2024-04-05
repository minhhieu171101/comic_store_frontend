import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {CommentService} from "../../core/service/comment.service";
import {CommentModel} from "../../models/CommentModel";
import {Page} from "../../models/Page";
import {ToastrService} from "ngx-toastr";
import {DeleteCommentComponent} from "./delete-comment/delete-comment.component";

@Component({
  selector: 'app-admin-comment',
  templateUrl: './admin-comment.component.html',
  styleUrl: './admin-comment.component.scss'
})
export class AdminCommentComponent implements OnInit{

  comment: CommentModel = new CommentModel();
  commentPage: Page<CommentModel> = new Page<CommentModel>()
  currentPage: number = 0;
  numberComment: number = 0;
  pageSize: number = 0;

  constructor(
      public dialog: MatDialog,
      private router: Router,
      private commentService: CommentService,
      private toaStr: ToastrService,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.pageSize = 10;
    this.comment.pageSize = 10;
    this.getPageCommentModel();
  }

  getPageCommentModel() {
    this.commentService.getCommentPage(this.comment).subscribe((res: Page<CommentModel>) => {
      this.commentPage = res;
      if (res.content) {
        this.numberComment = res.content.length;
      }
      this.cdr.detectChanges();
    })
  }

  openDialogDelete(comment: CommentModel): void {
    const dialogRef = this.dialog.open(DeleteCommentComponent, {
      data: comment
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPageCommentModel();
      this.cdr.detectChanges();
    });
  }

  handlePageChange(event: any) {
    this.comment.page = event;
    this.currentPage = event;
    this.getPageCommentModel();
  }
}
