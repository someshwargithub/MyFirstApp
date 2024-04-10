import { Component, OnInit,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  httpClient = inject(HttpClient);
  posts: Post[];
  error:any='';
  constructor() { 
    this.posts = [];
  }

  ngOnInit(): void {
    this.posts = this.getPostData();
  }
   getPostData() : any{
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: any) => {
        console.log(data);
        return   this.posts = data;
      },
      error => {
        console.log(error);
        this.error=error.message;
    });   
  }

}
