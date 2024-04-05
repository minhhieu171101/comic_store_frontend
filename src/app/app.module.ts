import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./components/footer/footer.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {PagesModule} from "./view/pages/pages.module";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./helpers/token.interceptor";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AppComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        RouterModule,
        AppRoutingModule,
        BrowserModule,
        PagesModule,
        HttpClientModule,

        // khai báo module cho toastr
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right',
            timeOut: 4000
        }),
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule { }
