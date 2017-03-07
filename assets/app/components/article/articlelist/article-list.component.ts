import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Article } from '../../../models/article.model';
import { ArticleService } from '../article.service';

@Component({
    selector: 'app-articlelist',
    templateUrl: 'article-list.component.html',
    styles:[`
        .panel-body {
            font-family: Nazanin, Lato, sans-serif;
        }
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width:80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
        .article-title{
                text-transform: capitalize;
        }

        .add-new-article{
            text-align: right;
        }

        .language{
            direction: rtl;
            font-family : Nazanin;
        }
    `]
})
export class ArticleListComponent implements OnInit {
    color= '#FFFFFF';
    articles : Article[] ;

    constructor( private articleService: ArticleService){
        
    }

    ngOnInit(){
       this.articleService.getArticles()
                          .subscribe(
                            (articles: Article[] )=> {
                                this.articles = articles;
                            }
                          );
    }
    
    isLoggedIn(){
      return localStorage.getItem('userId') != null;
    }
};