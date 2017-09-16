import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CSCommonModule } from '../../common/cs.common.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { NotificationLandingComponent } from '../components/notification.landing.component';
import { NotificationManagementComponent } from '../components/notifications.component';
import { NotificationComponent } from '../components/notification.component';
import { HeaderComponent } from '../../common/header/components/header.component';
import { SidebarComponent } from '../../common/sidebar/components/sidebar.component';
import { ActionbarComponent } from '../../common/actionbar/components/actionbar.component';

const notificationModuleRouting: Routes = [
    { path: '', component: NotificationLandingComponent, 
        children: [
            { path: '', component: HeaderComponent, outlet: 'headerView' },
            { path: '', component: SidebarComponent, outlet: 'sidebarView' },
            { path: '', component: ActionbarComponent, outlet: 'actionbarView' },
            { path: '', component: NotificationManagementComponent, outlet: 'contentView' },
            { path: 'notification', component: NotificationLandingComponent, outlet: 'contentView' }
        ]
    }
]

const NotificationRouting: ModuleWithProviders = RouterModule.forChild(notificationModuleRouting);

@NgModule({
    declarations: [
        NotificationLandingComponent,
        NotificationManagementComponent,
        NotificationComponent
    ],
    imports: [
        CommonModule,
        NotificationRouting,
        CSCommonModule,
        BootstrapModalModule.forRoot({container:document.body})
    ],
    exports: [],
    entryComponents: []
})
export class NotificationModule {

}