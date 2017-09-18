import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { CSCommonModule } from '../../common/cs.common.module';

import { CommentLandingComponent } from '../components/comment.landing.component';
import { CommentComponent } from '../components/comment.component';
import { CommentManagementComponent } from '../components/comments.component';
import { HeaderComponent } from '../../common/header/components/header.component';
import { SidebarComponent } from '../../common/sidebar/components/sidebar.component';
import { ActionbarComponent } from '../../common/actionbar/components/actionbar.component';

const commentModuleRouting: Routes = [
    { path: '', component: CommentLandingComponent, 
        children: [
            { path: '', component: CommentManagementComponent },
            { path: 'comment', component: CommentLandingComponent }
        ]
    }
];

const CommentRouting: ModuleWithProviders = RouterModule.forChild(commentModuleRouting);

@NgModule({
    declarations: [
        CommentLandingComponent,
        CommentComponent,
        CommentManagementComponent
    ],
    imports: [
        CommonModule,
        CommentRouting,
        CSCommonModule,
        BootstrapModalModule.forRoot({container:document.body})
    ],
    exports: [

    ],
    entryComponents: [

    ]
})

export class CommentModule {

}