import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { UserModule } from './main/user/modules/user.module';
import { PostModule } from './main/post/modules/post.module';

import { PostService } from './main/post/services/post.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/common/header/components/header.component';
import { SidebarComponent } from './main/common/sidebar/components/sidebar.component';
import { ActionbarComponent } from './main/common/actionbar/components/actionbar.component';
import { DashBoardComponent } from './main/dashboard/components/dashboard.component';
import { NotificationComponent } from './main/notification/components/notification.component';
import { NotificationManagementComponent } from './main/notification/components/notifications.component';
import { CommentComponent } from './main/comment/components/comment.component';
import { CommentManagementComponent } from './main/comment/components/comments.component';
import { ContactComponent } from './main/contact/components/contact.component';
import { ContactManagementComponent } from './main/contact/components/contacts.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'user-management', loadChildren: './main/user/modules/user.module#UserModule' },
  { path: 'post-management', loadChildren: './main/post/modules/post.module#PostModule' },
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
    UserModule,
    PostModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
