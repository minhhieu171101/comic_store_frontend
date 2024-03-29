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


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AppComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        RouterModule,
        AppRoutingModule,
        BrowserModule,
        PagesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
