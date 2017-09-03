import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { UserManagementComponent } from '../components/users.component';
import { UserComponent } from '../components/user.component';

const userModuleRouting: Routes = [
    { path: '', component: UserManagementComponent },
    { path: 'user', component: UserComponent }
];

const UserRouting: ModuleWithProviders = RouterModule.forChild(userModuleRouting);

@NgModule({
    declarations: [
        UserManagementComponent,
        UserComponent
    ],
    imports: [
        UserRouting
    ],
    exports: [

    ],
    entryComponents: [

    ]
})
export class UserModule {

}