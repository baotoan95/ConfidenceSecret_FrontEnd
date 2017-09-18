import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CSCommonModule } from '../components/common/cs.common.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AdminLandingComponent } from '../components/admin-landing.component';
import { DashboardComponent } from '../components/dashboard/components/dashboard.component';

const adminModuleRouting: Routes = [
    { path: '', component: AdminLandingComponent,
        children: [
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'user-management', loadChildren: '../components/user/modules/user.module#UserModule' },
            { path: 'post-management', loadChildren: '../components/post/modules/post.module#PostModule' },
            { path: 'notification-management', loadChildren: '../components/notification/modules/notification.module#NotificationModule' },
            { path: 'comment-management', loadChildren: '../components/comment/modules/comment.module#CommentModule' },
            { path: 'contact-management', loadChildren: '../components/contact/modules/contact.module#ContactModule' }
        ]
    },
    
];

const AdminRouting: ModuleWithProviders = RouterModule.forChild(adminModuleRouting);

@NgModule({
    declarations: [
        AdminLandingComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        AdminRouting,
        CSCommonModule,
        BootstrapModalModule.forRoot({container:document.body})
    ],
    exports: [
        
    ],
    entryComponents: []
})
export class AdminModule {
    
}