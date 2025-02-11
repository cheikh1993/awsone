
import {  Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostResolver } from './posts.resolver';


export const SocialMediaRoutingModule:Routes = [
    {
        path: '', component: PostListComponent, resolve: {posts: PostResolver}
    }
]


