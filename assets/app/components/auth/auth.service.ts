import { Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { User } from '../../models/user.model';
import {ErrorService} from '../error/error.service';


@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService){}

    signup(user : User){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type': 'application/json'});
        return this.http.post('https://smartgridnews.herokuapp.com/user', body, {headers: headers})
                .map((response: Response) => response.json())
                .catch( (error : Response) => {
                        this.errorService.handleError(error.json());
                        return Observable.throw(error.json() ) 
                });
    }

    signin(user : User){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type': 'application/json'});
        return this.http.post('https://smartgridnews.herokuapp.com/user/signin', body, {headers: headers})
                .map((response: Response) => response.json())
                .catch( (error : Response) => {
                        this.errorService.handleError(error.json());
                        return Observable.throw(error.json() ) 
                }); 
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') != null ;
    }
}