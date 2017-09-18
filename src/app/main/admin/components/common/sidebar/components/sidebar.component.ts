import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanelMenuModule, MenuItem } from 'primeng/primeng';

@Component({
    selector: 'sidebar-component',
    templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
    items: MenuItem[];
    window: Window;
    currentRoute: string = "";

    constructor(private router: Router) { }

    public ngOnInit() {
        this.currentRoute = this.router.url;

        this.items = [
            {
                label: 'User management',
                icon: 'fa-file-o',
                items: [
                    { label: 'All', icon: 'fa-plus', routerLink: ['/admin/user-management'] },
                    { label: 'Add new', icon: 'fa-plus', routerLink: ['/admin/user-management/user'] }
                ]
            },
            {
                label: 'Post management',
                icon: 'fa-edit',
                items: [
                    { label: 'All', icon: 'fa-mail-forward', routerLink: ['/admin/post-management'] },
                    { label: 'Add new', icon: 'fa-mail-reply', routerLink: ['/admin/post-management/post'] }
                ]
            },
            {
                label: 'Commnent management',
                icon: 'fa-gear',
                items: [
                    { label: 'All', icon: 'fa-refresh', routerLink: ['/admin/comment-management'] },
                    // { label: 'All', icon: 'fa-refresh', routerLink: ['/comment-management/comment'] }
                ]
            },
            {
                label: 'Contact management',
                icon: 'fa-question',
                items: [
                    { label: 'All', icon: 'fa-mail-forward', routerLink: ['/admin/contact-management'] },
                    // { label: 'Add new', icon: 'fa-mail-reply', routerLink: ['/user-management/contact'] }
                ]
            },
            {
                label: 'Notification',
                icon: 'fa-question',
                items: [
                    { label: 'All', icon: 'fa-mail-forward', routerLink: ['/admin/notification-management'] },
                    // { label: 'Add new', icon: 'fa-mail-reply', routerLink: ['/notification-management/notification'] }
                ]
            }
        ];
    }

    isRoute(...routes: string[]): Boolean {
        return routes.indexOf(this.currentRoute) >= 0;
    }

    routeLink(route: string) {
        if (route !== undefined && this.currentRoute !== route) {
            this.router.navigate([route]);
        }
        return false;
    }

    redirect(url: string) {
        window.open(url);
    }
}