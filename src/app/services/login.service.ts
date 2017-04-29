import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import * as assert from "assert";

import {LoginModel} from "../interfaces/login-model.interface";
import {loginMutation} from "../gql-mutations/login.gql-mutation";
import {User} from "../models/user.models";
import {LoginError} from "../enums/login-error.enum";
import {UserService} from "./user.service";
import {GqlResource} from "./gqlResource.service";

@Injectable()
export class LoginService extends GqlResource {
    constructor(apollo: Apollo,
                private userService: UserService) {
        super(apollo);
    }

    /**
     * Logs the user in and return the logged in user
     */
    async login(loginModel: LoginModel): Promise<LoginError> {
        assert(loginModel);
        assert(loginModel.username);
        assert(loginModel.password);

        // send the login request
        let mutationResponse;
        try {
            mutationResponse = await this.mutate({
                mutation: loginMutation,
                variables: loginModel
            });
        } catch (err) {
            // if there is an error, return the LoginError
            switch (err) {
                case 'INCORRECT_USERNAME_OR_PASSWORD':
                    return LoginError.INCORRECT_USERNAME_OR_PASSWORD;
                default:
                    return LoginError.UNKNOWN;
            }
        }

        // if there are no error, then create a user from the response and set it in the state
        const user = new User(mutationResponse);
        this.userService.setUser(user);
    }
}
