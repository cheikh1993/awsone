import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../../models/comment';
import { MatListModule } from '@angular/material/list'
import { CommonModule } from '@angular/common';
import { MatLineModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { SortedPipe } from '../../../pipes/sorted-pipe';
import { animate, animateChild, group, query, sequence, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { TimeAgoPipe } from '../../../pipes/time-ago';
import { flashAnimation, slideAnimation } from '../../../animations/flashAnimation';



@Component({
  selector: 'app-comment',
  imports: [
    MatListModule,
    CommonModule,
    MatLineModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    TimeAgoPipe

  ],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@listItem', [
          stagger(50, [
            animateChild()
          ])
        ])
      ])
    ]),
    trigger('listItem', [
      state('default', style({
        transform: 'scale(1)',
        'background-color': 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        'background-color': 'rgb(201, 157, 242)',
        'z-index': 2
      })),
      transition('default => active', [
        animate('100ms ease-in-out')
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),

      transition('void => *', [
        query('.comment-text, .comment-date', [
          style({
            opacity: 0
          })
        ]),
       useAnimation(slideAnimation,{
        params: {
          time:'250ms',
           colorFlash: 'rgb(201, 157, 242)'
        }
       }),
        group([
          useAnimation(flashAnimation,{
            params:{
              time:'500ms',
              colorFlash: 'rgb(201, 157, 242)'
            }
          }),
          query('.comment-text', [
            animate('250ms', style({
              opacity: 1
            }))
          ]),
          query('.comment-date', [
            animate('500ms', style({
              opacity: 1
            }))
          ]),
        ]),
      ])
    ]),
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {


  commentCtrl!: FormControl
  animationStates: { [key: number]: 'default' | 'active' } = {};

  constructor(private formBuilder: FormBuilder) { }

  @Input() comments!: Comment[]
  @Output() newComment = new EventEmitter<string>()
  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
  }
  OnleavComment() {
    if (this.commentCtrl.invalid) {
      return;
    }
    const maxId = Math.max(...this.comments.map(comment => comment.id));
    this.comments.unshift({
      id: maxId + 1,
      comment: this.commentCtrl.value,
      createdDate: new Date().toISOString(),
      userId: 1
    });
    this.newComment.emit(this.commentCtrl.value)
    this.commentCtrl.reset()
  }

  onListItemMouseLeave(index: number) {
    this.animationStates[index] = 'default'

  }
  onListItemMouseEnter(index: number) {
    this.animationStates[index] = 'active'
  }

}
