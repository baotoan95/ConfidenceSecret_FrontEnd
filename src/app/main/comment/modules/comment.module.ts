import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CommentComponent } from '../components/comment.component';
import { CommentManagementComponent } from '../components/comments.component';

const commentModuleRouting: Routes = [
    { path: 'comment', component: CommentComponent },
    { path: '', component: CommentManagementComponent }
];

const CommentRouting: ModuleWithProviders = RouterModule.forChild(commentModuleRouting);

@NgModule({
    declarations: [
        CommentComponent,
        CommentManagementComponent
    ],
    imports: [
        CommonModule,
        CommentRouting
    ],
    exports: [

    ],
    entryComponents: [

    ]
})

export class CommentModule {

}