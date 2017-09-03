import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { UserModule } from './main/user/modules/user.module';

import { PostService } from './main/post/services/post.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/components/header.component';
import { SidebarComponent } from './main/sidebar/components/sidebar.component';
import { ActionbarComponent } from './main/actionbar/components/actionbar.component';
import { DashBoardComponent } from './main/dashboard/components/dashboard.component';
// import { UserComponent } from './main/user/components/user.component';
// import { UserManagementComponent } from './main/user/components/users.component';
import { PostComponent } from './main/post/components/post.component';
import { PostManagementComponent } from './main/post/components/posts.component';
import { NotificationComponent } from './main/notification/components/notification.component';
import { NotificationManagementComponent } from './main/notification/components/notifications.component';
import { CommentComponent } from './main/comment/components/comment.component';
import { CommentManagementComponent } from './main/comment/components/comments.component';
import { ContactComponent } from './main/contact/components/contact.component';
import { ContactManagementComponent } from './main/contact/components/contacts.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'user-management', loadChildren: 'app/components/user/modules/user.module#UserModule' },
  { path: 'post', component: PostComponent },
  { path: 'post-management', component: PostManagementComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-management', component: ContactManagementComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'notification-management', component: NotificationManagementComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'comment-management', component: CommentManagementComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ActionbarComponent,
    DashBoardComponent,
    PostComponent,
    PostManagementComponent,
    ContactComponent,
    ContactManagementComponent,
    NotificationComponent,
    NotificationManagementComponent,
    CommentComponent,
    CommentManagementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes, {
      //enableTracing: true // Debug only
    }),
    HttpModule,
    UserModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
