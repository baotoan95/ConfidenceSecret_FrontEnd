import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'signin-component',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    constructor(private router: Router) { }

    public login() {
        this.router.navigate(['admin']);
        return false;
    }
}