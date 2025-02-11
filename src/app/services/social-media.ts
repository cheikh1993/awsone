import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/posts";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class PostService{
   addNewPost(postCommented: { comment: string; postId: number; }) {
     console.log(postCommented)
   }
   constructor(private httpClient: HttpClient){}

   private API = environment.apiUrl

   getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.API}/posts`)
   }

 
}