import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/components/header.component';
import { SidebarComponent } from './components/sidebar/components/sidebar.component';
import { ActionbarComponent } from './components/actionbar/components/actionbar.component';
import { DashBoardComponent } from './components/dashboard/components/dashboard.component';
import { UserComponent } from './components/user/components/user.component';
import { UserManagementComponent } from './components/user/components/users.component';
import { PostComponent } from './components/post/components/post.component';
import { PostManagementComponent } from './components/post/components/posts.component';
import { NotificationComponent } from './components/notification/components/notification.component';
import { NotificationManagementComponent } from './components/notification/components/notifications.component';
import { CommentComponent } from './components/comment/components/comment.component';
import { CommentManagementComponent } from './components/comment/components/comments.component';
import { ContactComponent } from './components/contact/components/contact.component';
import { ContactManagementComponent } from './components/contact/components/contacts.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'user', component: UserComponent },
  { path: 'user-management', component: UserManagementComponent },
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
    UserComponent,
    UserManagementComponent,
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
