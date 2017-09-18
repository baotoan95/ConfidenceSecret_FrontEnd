import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'comment-management-component',
    templateUrl: './comments.component.html'
})

export class CommentManagementComponent implements OnInit {
    constructor(private titleService: Title, private router: Router) {
        
    }

    ngOnInit() {
        
    }
}