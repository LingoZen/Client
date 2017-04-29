import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {LoginModel} from "../../interfaces/login-model.interface";
import {LoginError} from "../../enums/login-error.enum";
import {LoginService} from "../../services/login.service";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    //the object used to store the form values
    public loginModel: LoginModel;
    //we want to access LoginError in our template, so this is the enum itself not a value
    public LoginError: typeof LoginError;
    public loginError: LoginError; //login error that occurred when trying to log in.

    constructor(private loginService: LoginService,
                private router: Router) {
        this.loginModel = {username: null, password: null};
        this.LoginError = LoginError;
    }

    public async login() {
        //try to login
        this.loginError = await this.loginService.login(this.loginModel);

        //if there are no error then go back to the home page
        if (!this.loginError) {
            this.router.navigate(['/'])
        }
    }
}
