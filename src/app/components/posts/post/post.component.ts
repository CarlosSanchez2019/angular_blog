import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { PostI } from '../../shared/models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

public post$: Observable<PostI>

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const postId = this.route.snapshot.params.id;
    this.post$ = this.postService.getOnePost(postId)
  }

}
