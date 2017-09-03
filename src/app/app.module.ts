import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { UserModule } from './main/user/modules/user.module';
import { PostModule } from './main/post/modules/post.module';
import { NotificationModule } from './main/notification/modules/notification.module';
import { CommentModule } from './main/comment/modules/comment.module';
import { ContactModule } from './main/contact/modules/contact.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/common/header/components/header.component';
import { SidebarComponent } from './main/common/sidebar/components/sidebar.component';
import { ActionbarComponent } from './main/common/actionbar/components/actionbar.component';
import { DashBoardComponent } from './main/dashboard/components/dashboard.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'user-management', loadChildren: './main/user/modules/user.module#UserModule' },
  { path: 'post-management', loadChildren: './main/post/modules/post.module#PostModule' },
  { path: 'notification-management', loadChildren: './main/notification/modules/notification.module#NotificationModule' },
  { path: 'comment-management', loadChildren: './main/comment/modules/comment.module#CommentModule' },
  { path: 'contact-management', loadChildren: './main/contact/modules/contact.module#ContactModule' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ActionbarComponent,
    DashBoardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes, {
      //enableTracing: true // Debug only
    }),
    HttpModule,
    UserModule,
    PostModule,
    NotificationModule,
    CommentModule,
    ContactModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
