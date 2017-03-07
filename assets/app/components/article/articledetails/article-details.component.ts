import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Article } from '../../../models/article.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import {NgForm} from '@angular/forms';



@Component({
    selector: 'app-articlelist',
    templateUrl: 'article-details.component.html',
    styles:[`
        .panel-body {
            font-family: Lato, sans-serif;
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
    `]
    //providers: [ ArticleService ]
})
export class ArticleDetailsComponent implements OnInit{
    @Output() editClicked = new EventEmitter<string>();

    private sub:any;
    private article:Article;
    private articleID:string;
    private articleBeforeEdit:Article;
    private isOnEditMode : boolean = false;
    
  constructor(private articleService: ArticleService, 
              private route: ActivatedRoute,
              private router: Router) {  }

  // Load data ones componet is ready
  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
        this.articleID = id;
       // Retrieve Article with Id route param
        this.article = this.articleService.findArticleById(id);
        this.articleBeforeEdit = JSON.parse(JSON.stringify(this.article));
    });
  }
  
  onEdit(){
      this.isOnEditMode = true;
      //this.editClicked.emit('A new content');
  }

  onCancelEdit(){
      this.isOnEditMode = false;
      this.article = this.articleBeforeEdit;
  }

  onSaveEdit(form : NgForm){
      this.isOnEditMode = false;
      this.articleService.updateArticle(this.article)
                        .subscribe(
                            result => console.log(result)
                        );
  }

  onDelete(){
        this.articleService.deleteArticle(this.article)
            .subscribe(
                result =>  console.log(result)
            );
        this.router.navigateByUrl('/home');
  }

  belongsToUser(){
      return localStorage.getItem('userId') == this.article.userId;
  }
  

    
};