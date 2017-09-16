import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/primeng';

import { HeaderComponent } from './header/components/header.component';
import { SidebarComponent } from './sidebar/components/sidebar.component';
import { ActionbarComponent } from './actionbar/components/actionbar.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        ActionbarComponent
    ],
    imports: [
        PanelMenuModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        ActionbarComponent
    ]
})
export class CSCommonModule {

}