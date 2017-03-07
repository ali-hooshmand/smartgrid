import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component';
import { ArticleListComponent } from './components/article/articlelist/article-list.component';
import { ArticleDetailsComponent } from './components/article/articledetails/article-details.component';
import { ArticleInputComponent } from './components/article/articleinput/article-input.component';
import { Article } from './models/article.model';
import { AUTH_ROUTES } from './components/auth/auth.routes';

// Route Configuration
export const routes: Routes = [
  { path: 'home', component: ArticleListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth', component: AuthComponent , children: AUTH_ROUTES },
  { path: 'article-input', component: ArticleInputComponent },
  { path: 'article/:id', component: ArticleDetailsComponent, data: [Article]},
  { path: '', redirectTo: '/home', pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
