import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {LoginError} from "../enums/login-error.enum";
import {LoginModel} from "../interfaces/login-model.interface";
import * as assert from "assert";

@Injectable()
export class LoginService {
    constructor(private apollo: Apollo) {
    }

    /**
     * Log the user in and return any login errors that may have occurred
     *
     */
    public async login(loginModel: LoginModel): Promise<LoginError> {
        assert(loginModel);
        assert(loginModel.username);
        assert(loginModel.password);

        await new Promise(resolve => setTimeout(() => resolve(), 3000));

        return LoginError.UNKNOWN;
    }
}
