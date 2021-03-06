import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {
    private apiUrl: string = "http://localhost:85/ConfidenceSecret/posts";

    constructor(private _http: Http) {}

    public posts(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => {
            return response.json();
        });
    }

    public add(post: Post): Observable<Response> {
        return this._http.post(this.apiUrl, post);
    }
}