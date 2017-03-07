import { Component } from '@angular/core';

import { ArticleService } from './components/article/article.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers:[ArticleService]
})
export class AppComponent {
    
}