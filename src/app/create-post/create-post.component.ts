import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  createForm: FormGroup;
  id: string
  post$: Observable<Post>
  constructor(private _create: PostService, private route: ActivatedRoute) {
    this.createForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('',Validators.required),
    });
  }
  ngOnInit() { 
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
        if (params.has('id')){
          this._create.getPost(this.id).subscribe(x => this.createForm.patchValue({
            title: x.title,
            body: x.body
          }))
        }
      }
    )
  }

  submit(){
    if (this.id.length>0){
      this._create.editPost(
        this.id, 
        this.createForm.get('title').value,
        this.createForm.get('body').value)
          .subscribe(x => console.log(x));
    }
    else  {
      this._create.createPost(
        this.createForm.get('title').value,
        this.createForm.get('body').value)
          .subscribe(x => console.log(x));
      
    }
  
    
  } 
  

}