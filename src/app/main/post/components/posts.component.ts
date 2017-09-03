import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
    selector: 'post-management-component',
    templateUrl: './posts.component.html',
    styleUrls: [],
    providers: [
        PostService
    ]
})

export class PostManagementComponent implements OnInit {
    public posts: any;

    constructor(private postService: PostService) {

    }

    public ngOnInit() {
        this.postService.posts().subscribe((response: any) => {
            this.posts = response;
        });
    }
}