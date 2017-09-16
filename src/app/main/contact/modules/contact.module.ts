import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CSCommonModule } from '../../common/cs.common.module';

import { ContactLandingComponent } from '../components/contact.landing.component';
import { ContactComponent } from '../components/contact.component';
import { ContactManagementComponent } from '../components/contacts.component';
import { HeaderComponent } from '../../common/header/components/header.component';
import { SidebarComponent } from '../../common/sidebar/components/sidebar.component';
import { ActionbarComponent } from '../../common/actionbar/components/actionbar.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

const contactModuleRouting: Routes = [
    { path: '', component: ContactLandingComponent, 
        children: [
            { path: '', component: HeaderComponent, outlet: 'headerView' },
            { path: '', component: SidebarComponent, outlet: 'sidebarView' },
            { path: '', component: ActionbarComponent, outlet: 'actionbarView' },
            { path: '', component: ContactManagementComponent, outlet: 'contentView' },
            { path: 'contact', component: ContactLandingComponent, outlet: 'contentView' }
        ]
    }
];

const ContactRouting: ModuleWithProviders = RouterModule.forChild(contactModuleRouting);

@NgModule({
    declarations: [
        ContactLandingComponent,
        ContactComponent,
        ContactManagementComponent
    ],
    imports: [
        CommonModule,
        ContactRouting,
        CSCommonModule,
        BootstrapModalModule.forRoot({container:document.body})
    ],
    exports: [
        
    ],
    entryComponents: [

    ]
})

export class ContactModule {

}