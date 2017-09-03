import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PostManagementComponent } from '../components/posts.component';
import { PostComponent } from '../components/post.component';

import { PostService } from '../services/post.service';

const postModuleRouting: Routes = [
    { path: '', component: PostManagementComponent },
    { path: 'post', component: PostComponent }
]

const PostRouting: ModuleWithProviders = RouterModule.forChild(postModuleRouting);

@NgModule({
    declarations: [
        PostManagementComponent,
        PostComponent
    ],
    imports: [
        CommonModule,
        PostRouting
    ],
    exports: [],
    providers: [
        PostService
    ]
})
export class PostModule {

}