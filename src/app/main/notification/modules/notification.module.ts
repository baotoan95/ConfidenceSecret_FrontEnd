import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotificationManagementComponent } from '../components/notifications.component';
import { NotificationComponent } from '../components/notification.component';

const notificationModuleRouting: Routes = [
    { path: '', component: NotificationManagementComponent },
    { path: 'notification', component: NotificationComponent }
]

const NotificationRouting: ModuleWithProviders = RouterModule.forChild(notificationModuleRouting);

@NgModule({
    declarations: [
        NotificationManagementComponent,
        NotificationComponent
    ],
    imports: [
        CommonModule,
        NotificationRouting
    ],
    exports: [],
    entryComponents: []
})
export class NotificationModule {

}