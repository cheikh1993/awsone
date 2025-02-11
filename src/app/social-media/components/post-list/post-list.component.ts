import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../../../models/posts';
import { ActivatedRoute } from '@angular/router';
import { PostListItemComponent } from "../post-list-item/post-list-item.component";
import { CommonModule } from '@angular/common';
import { PostService } from '../../../services/social-media';

@Component({
  selector: 'app-post-list',
  imports: [PostListItemComponent, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private postService: PostService){}
  
  posts$!: Observable<Post[]>
  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    )
    
  }
  onPostCommented(postCommented: { comment: string; postId: number; }) {
    this.postService.addNewPost(postCommented)
  }

}
