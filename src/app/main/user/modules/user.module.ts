import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CSCommonModule } from '../../common/cs.common.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { UserRoutingModule } from './user-routing.module';

import { UserLandingComponent } from '../components/user.landing.component';
import { UserManagementComponent } from '../components/users.component';
import { UserComponent } from '../components/user.component';
import { HeaderComponent } from '../../common/header/components/header.component';
import { SidebarComponent } from '../../common/sidebar/components/sidebar.component';
import { ActionbarComponent } from '../../common/actionbar/components/actionbar.component';

@NgModule({
    declarations: [
        UserLandingComponent,
        UserManagementComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        CSCommonModule,
        BootstrapModalModule.forRoot({container:document.body})
    ],
    exports: [
        
    ],
    entryComponents: [

    ]
})
export class UserModule {

}