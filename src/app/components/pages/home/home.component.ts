import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts/post.service';
import { Observable } from 'rxjs';
import { PostI } from '../../shared/models/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts$: Observable<PostI[]>

  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.postService.getAllPost()
    //   .subscribe(res => console.log('POST', res))
    this.posts$ = this.postService.getAllPost()
  }

}
