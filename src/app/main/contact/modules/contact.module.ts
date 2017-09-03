import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContactComponent } from '../components/contact.component';
import { ContactManagementComponent } from '../components/contacts.component';

const contactModuleRouting: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: '', component: ContactManagementComponent }
];

const ContactRouting: ModuleWithProviders = RouterModule.forChild(contactModuleRouting);

@NgModule({
    declarations: [
        ContactComponent,
        ContactManagementComponent
    ],
    imports: [
        CommonModule,
        ContactRouting
    ],
    exports: [

    ],
    entryComponents: [

    ]
})

export class ContactModule {

}