import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {RegisterService} from "../../services/register.service";
import {RegisterModel} from "../../interfaces/register-model.interface";
import {RegisterError} from "../../enums/register-error.enum";

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    //the object used to store the form values
    public registerModel: RegisterModel;
    //we want to access RegisterError in our template, so this is the enum itself not a value
    public RegisterError: typeof RegisterError;
    public registerError: RegisterError; //register error that occurred when trying to log in.

    constructor(private registerService: RegisterService,
                private router: Router) {
        this.registerModel = {username: null, password: null, name: null, email: null};
        this.RegisterError = RegisterError;
    }

    public async register() {
        //try to register
        this.registerError = await this.registerService.register(this.registerModel);

        //if there are no error then go back to the home page
        if (!this.registerError) {
            this.router.navigate(['/'])
        }
    }
}
