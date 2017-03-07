import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from "./app.component";
import { AboutComponent } from './components/about/about.component';
import { AuthComponent }   from './components/auth/auth.component';
import { LogoutComponent } from './components/auth/logout.component';
import { SignupComponent } from './components/auth/signup.component';
import { SigninComponent } from './components/auth/signin.component';
import { routing } from './app.routes';
import { AuthService } from './components/auth/auth.service';
import { ErrorComponent } from './components/error/error.component';
import { ErrorService } from './components/error/error.service';
//import { ArticleModule } from './components/article/article.module';
import { ArticleListComponent } from './components/article/articlelist/article-list.component';
import { ArticleDetailsComponent } from './components/article/articledetails/article-details.component';
import { ArticleInputComponent } from './components/article/articleinput/article-input.component';

@NgModule({
    declarations: [
        AppComponent, 
        AboutComponent,
        AuthComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
        ArticleListComponent,
        ArticleDetailsComponent,
        ArticleInputComponent
    ],
    //imports: [ArticleModule, BrowserModule, HttpModule, routing, ReactiveFormsModule ],
    imports: [BrowserModule, HttpModule, routing, ReactiveFormsModule, FormsModule, CommonModule ],
    providers:[AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}