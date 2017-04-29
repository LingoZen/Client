import {Component} from "@angular/core";
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
    //lock the form (don't allow changes to it); used to lock forms when sending a request to api and waiting for response
    public isFormLocked: boolean;
    //we want to access RegisterError in our template, so this is the enum itself not a value
    public RegisterError: typeof RegisterError;
    public registerError: RegisterError; //register error that occurred when trying to log in.

    constructor(private registerService: RegisterService) {
        this.registerModel = {username: null, password: null, name: null, email: null};
        this.RegisterError = RegisterError;
    }

    public async register() {
        //lock the form before sending a request
        this.isFormLocked = true;

        //try to register
        this.registerError = await this.registerService.register(this.registerModel);

        //release the form now that we have a response
        this.isFormLocked = false;
    }
}
