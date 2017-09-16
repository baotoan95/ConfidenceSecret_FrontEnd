import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserLandingComponent } from '../components/user.landing.component';
import { UserManagementComponent } from '../components/users.component';
import { UserComponent } from '../components/user.component';
import { HeaderComponent } from '../../common/header/components/header.component';
import { SidebarComponent } from '../../common/sidebar/components/sidebar.component';
import { ActionbarComponent } from '../../common/actionbar/components/actionbar.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: UserLandingComponent,
                children: [
                    { path: '', component: UserManagementComponent },
                    { path: 'user', component: UserComponent }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule { }