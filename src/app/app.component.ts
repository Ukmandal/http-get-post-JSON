import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  data: any;
  postId: string;
  singlePost: any;

  constructor(private httpService: HttpService) {
    this.httpService.getPosts().subscribe((posts) => {
    this.data = posts;
    })
    this.postId ="0";

    this.singlePost ={
      id: '',
      userId: '',
      title: '',
      body: '',
    }
  }

  getPost(){
    this.httpService.getPostId(this.postId).subscribe(post =>{
      this.singlePost = post;
    })
  }
}
