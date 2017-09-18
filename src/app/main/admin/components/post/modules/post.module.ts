import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CSCommonModule } from '../../common/cs.common.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { PostLandingComponent } from '../components/post.landing.component';
import { PostManagementComponent } from '../components/posts.component';
import { PostComponent } from '../components/post.component';
import { HeaderComponent } from '../../common/header/components/header.component';
import { SidebarComponent } from '../../common/sidebar/components/sidebar.component';
import { ActionbarComponent } from '../../common/actionbar/components/actionbar.component';

import { PostService } from '../services/post.service';

const postModuleRouting: Routes = [
    { path: '', component: PostLandingComponent, 
        children: [
            { path: '', component: PostManagementComponent },
            { path: 'post', component: PostComponent }
        ]
    }
]

const PostRouting: ModuleWithProviders = RouterModule.forChild(postModuleRouting);

@NgModule({
    declarations: [
        PostLandingComponent,
        PostManagementComponent,
        PostComponent
    ],
    imports: [
        CommonModule,
        PostRouting,
        CSCommonModule,
        BootstrapModalModule.forRoot({container:document.body})
    ],
    exports: [
        PostLandingComponent,
        PostManagementComponent,
        PostComponent
    ],
    providers: [
        PostService
    ]
})
export class PostModule {

}