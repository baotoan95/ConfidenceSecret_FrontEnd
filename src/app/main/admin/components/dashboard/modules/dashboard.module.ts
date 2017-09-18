import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CSCommonModule } from '../../common/cs.common.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { DashboardComponent } from '../components/dashboard.component';
import { DashboardLandingComponent } from '../components/dashboard.landing.component';
import { HeaderComponent } from '../../common/header/components/header.component';
import { SidebarComponent } from '../../common/sidebar/components/sidebar.component';
import { ActionbarComponent } from '../../common/actionbar/components/actionbar.component';

const dashboardModuleRouting: Routes = [
    {
        path: '', component: DashboardLandingComponent,
        children: [
            { path: '', component: HeaderComponent, outlet: 'headerView' },
            { path: '', component: SidebarComponent, outlet: 'sidebarView' },
            { path: '', component: ActionbarComponent, outlet: 'actionbarView' },
            { path: '', component: DashboardComponent, outlet: 'contentView' }
        ]
    }
];

const DashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardModuleRouting);

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardLandingComponent
    ],
    imports: [
        CommonModule,
        DashboardRouting,
        CSCommonModule,
        BootstrapModalModule.forRoot({ container: document.body })
    ],
    exports: [
        DashboardComponent,
        DashboardLandingComponent
    ],
    entryComponents: [

    ]
})
export class DashboardModule {

}