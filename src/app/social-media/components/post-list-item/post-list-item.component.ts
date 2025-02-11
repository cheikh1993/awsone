import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../models/posts';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { CommentComponent } from "../comment/comment.component";
import { SortedPipe } from '../../../pipes/sorted-pipe';
import { UsernamePipe } from '../../../pipes/username.pipe';
import { TimeAgoPipe } from '../../../pipes/time-ago';
import { HighlightDirective } from '../../../directives/highligh.directive';

@Component({
  selector: 'app-post-list-item',
  imports: [
    TitleCasePipe,
    MatCardModule,
    DatePipe,
    CommonModule,
    CommentComponent,
    SortedPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective
  ],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss'
})
export class PostListItemComponent implements OnInit {

  tour = { firstName: "Cheikh", lastName: "Faye" }; // Correction ici

  @Input() post!: Post
  @Output() postCommented = new EventEmitter<({ comment: string, postId: number })>()
  ngOnInit(): void {

  }
  onNewComment(comment: string) {
    this.postCommented.emit({ comment, postId: this.post.id })
  }

}
