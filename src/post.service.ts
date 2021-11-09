import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
 providedIn: 'root',
})

export class PostService {
 
  constructor(private client: HttpClient) { }
 
  getProfile() {
      return this
      .client
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
 
  getPost(id: string) {
    return this
    .client
    .get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
  }
 
  createPost(title: string, body: string) {
    const requestBody = {
      title: title,
      body: body
    }
    return this
    .client
    .post('https://jsonplaceholder.typicode.com/posts',requestBody)
   }
  
  editPost(id: string ,title: string, body: string) {
    const requestBody = {
      title: title,
      body: body
    }
    return this
    .client
    .put('https://jsonplaceholder.typicode.com/posts/'+id,requestBody)
  }
}