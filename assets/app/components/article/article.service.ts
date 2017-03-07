import { Injectable, EventEmitter } from '@angular/core';
import {Article} from '../../models/article.model';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {ErrorService} from '../error/error.service';

@Injectable()
export class ArticleService {
     private articles: Article[]; 
    //articleIsEdit = new EventEmitter<Article>();
    constructor(private http: Http, private errorService: ErrorService){ }

    addArticle( article: Article){
        //article.username = 'ali hooshii';
        //article.articleId = (this.articles.length + 1).toString();
        //this.articles.push(article);

        const body = JSON.stringify(article);
        const headers = new Headers({'content-type': 'application/json'});
        const token = localStorage.getItem('token') 
                      ? '?token='+localStorage.getItem('token')
                      :'';
        return this.http.post('https://smartgridnews.herokuapp.com/article' + token, body, {headers: headers}) 
                .map((response : Response) => {
                    const result = response.json();
                    const article = new Article(result.obj.title, 
                                                result.obj.content, 
                                                result.obj.user.firstName + ' ' + result.obj.user.lastName,
                                                //result.obj.user.firstName, 
                                                result.obj._id.toString(),
                                                result.obj.user._id);
                    this.articles.push(article);
                    return article;
                })
                .catch( (error : Response) => {
                        this.errorService.handleError(error.json());
                        return Observable.throw(error.json() ) 
                });
    }

    getArticles(){
        //return this.articles;
          //return this.http.get('http://localhost:3000/article')
          return this.http.get('https://smartgridnews.herokuapp.com/article')
                .map((response: Response) => {
                    const articles = response.json().obj;
                    let transformedArticles : Article[] = [];
                    for (let article of articles){
                        transformedArticles.push(new Article(article.title, 
                                                             article.content, 
                                                             article.user.firstName+' '+article.user.lastName,
                                                             article._id.toString(), 
                                                             article.user._id));
                    }
                    if(!this.articles){
                        this.articles = transformedArticles;
                    }

                    return this.articles;//transformedArticles;
                })
                .catch( (error : Response) => {
                        this.errorService.handleError(error.json());
                        return Observable.throw(error.json() ) 
                });
                //.catch((error : Response) => Observable.throw(error.json()));
    }

    findArticleById(id){
        return this.articles.find(x => x.articleId === id);
    }

    updateArticle(article: Article){

        const body = JSON.stringify(article);
        const headers = new Headers({'content-type': 'application/json'});
        const token = localStorage.getItem('token') 
                      ? '?token='+localStorage.getItem('token')
                      :'';
        return this.http.patch('https://smartgridnews.herokuapp.com/article/' + article.articleId + token, body, {headers: headers}) 
                .map((response : Response) => response.json())
                .catch( (error : Response) => {
                        this.errorService.handleError(error.json());
                        return Observable.throw(error.json() ) 
                });
    }

    deleteArticle(article: Article){
        const token = localStorage.getItem('token') 
                      ? '?token='+localStorage.getItem('token')
                      :'';
        this.articles.splice(this.articles.indexOf(article), 1);
        return this.http.delete('https://smartgridnews.herokuapp.com/article/' + article.articleId + token) 
                .map((response : Response) => response.json())
                .catch( (error : Response) => {
                        this.errorService.handleError(error.json());
                        return Observable.throw(error.json() ) 
                });
    }
    
}

