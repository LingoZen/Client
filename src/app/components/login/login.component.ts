import {Component} from "@angular/core";
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
    //lock the form (don't allow changes to it); used to lock forms when sending a request to api and waiting for response
    public isFormLocked: boolean;
    //we want to access LoginError in our template, so this is the enum itself not a value
    public LoginError: typeof LoginError;
    public loginError: LoginError; //login error that occurred when trying to log in.

    constructor(private loginService: LoginService) {
        this.loginModel = {username: null, password: null};
        this.LoginError = LoginError;
    }

    public async login() {
        //lock the form before sending a request
        this.isFormLocked = true;

        //try to login
        this.loginError = await this.loginService.login(this.loginModel);

        //release the form now that we have a response
        this.isFormLocked = false;
    }
}
