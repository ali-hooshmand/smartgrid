import {Component} from '@angular/core';

@Component({
    selector: 'app-about',
    template: `<h1>{{introduction}}</h1>`
})
export class AboutComponent {
    introduction : string;
    constructor(){
        this.introduction = "Welcome to about page :)"
    };
};