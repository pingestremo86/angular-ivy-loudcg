import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from '../test/test.component';
import { FirstComponent } from './first/first.component';
import { CeoComponent } from './ceo/ceo.component';
import { DirComponent } from './dir/dir.component';
import { TemplateRegisterComponent } from './template-register/template-register.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { ConcatenationPipe } from './concatenation.pipe';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FindPostComponent } from './find-post/find-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: PostsListComponent },
  { path: 'login', component: ReactiveLoginComponent },
  { path: 'postid/:id', component: FindPostComponent},
  { path: 'create', component: CreatePostComponent},
  { path: 'editpost/:id', component: CreatePostComponent},
  { path: 'lang', component: DirComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HelloComponent, TestComponent, 
                  FirstComponent, CeoComponent, DirComponent, 
                  TemplateRegisterComponent, ReactiveRegisterComponent, PostsListComponent, ReactiveLoginComponent, ConcatenationPipe, NavComponent, FindPostComponent, CreatePostComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
