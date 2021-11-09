import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  showedposts: Post[] = [];
  postList$: Observable<Post[]>
  constructor(private _post: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postList$=this._post.getProfile()
  }

  
   

}