import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/signin', pathMatch: 'full' },
            { path: 'signin', loadChildren: './main/signin/modules/signin.module#SigninModule', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './main/dashboard/modules/dashboard.module#DashboardModule' },
            { path: 'user-management', loadChildren: './main/user/modules/user.module#UserModule' },
            { path: 'post-management', loadChildren: './main/post/modules/post.module#PostModule' },
            { path: 'notification-management', loadChildren: './main/notification/modules/notification.module#NotificationModule', pathMatch: 'full' },
            { path: 'comment-management', loadChildren: './main/comment/modules/comment.module#CommentModule', pathMatch: 'full' },
            { path: 'contact-management', loadChildren: './main/contact/modules/contact.module#ContactModule', pathMatch: 'full' }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}