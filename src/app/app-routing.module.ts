import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/signin', pathMatch: 'full' },
            { path: 'signin', loadChildren: './main/signin/modules/signin.module#SigninModule', pathMatch: 'full' },
            { path: 'admin', loadChildren: './main/admin/modules/admin.module#AdminModule'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}