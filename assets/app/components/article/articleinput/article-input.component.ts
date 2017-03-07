import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';

import { Article } from '../../../models/article.model';
import { ArticleService } from '../article.service';

@Component({
    selector: 'my-article-input',
    templateUrl: './article-input.component.html',
    //providers:[ArticleService]
    
})
export class ArticleInputComponent{

    constructor(private articleService: ArticleService,private router: Router) { }

    onSubmit(form : NgForm){
        const article = new Article(form.value.title,form.value.content);
        this.articleService.addArticle(article)
            .subscribe(
                data => console.log(data),
                error => console.log(error),
            );
        form.resetForm();
        this.router.navigateByUrl('/home');
    }
    redirectTo(){
        this.router.navigateByUrl('/home');
    }

}