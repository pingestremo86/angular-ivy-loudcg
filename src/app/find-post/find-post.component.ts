import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-find-post',
  templateUrl: './find-post.component.html',
  styleUrls: ['./find-post.component.css']
})
export class FindPostComponent implements OnInit {
  findPost$: Observable<Post>
  constructor(private _post: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
      const id = params.get('id');
      this.findPost$=this._post.getPost(id)
      }
      )

    
      }
  }