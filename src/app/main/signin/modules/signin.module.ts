import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { SigninComponent } from '../components/signin.component';

const signỉnModuleRouting: Routes = [
    { path: '', component: SigninComponent }
];

const SigninRouting: ModuleWithProviders = RouterModule.forChild(signỉnModuleRouting);

@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        CommonModule,
        SigninRouting,
        BootstrapModalModule.forRoot({container:document.body})
    ],
    exports: [
        SigninComponent
    ],
    entryComponents: []
})
export class SigninModule {
    
}