import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Post } from "../models/posts";
import { PostService } from "../services/social-media";

@Injectable({
  providedIn: 'root' 
})
export class PostResolver implements Resolve<Post[]> {
  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postService.getPosts();
  }
}
