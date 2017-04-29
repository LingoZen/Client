import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import * as assert from "assert";

import {User} from "../models/user.models";
import {UserService} from "./user.service";
import {GqlResource} from "./gqlResource.service";
import {RegisterModel} from "../interfaces/register-model.interface";
import {registerMutation} from "../gql-mutations/register.gql-mutation";
import {RegisterError} from "../enums/register-error.enum";

@Injectable()
export class RegisterService extends GqlResource {
    constructor(apollo: Apollo,
                private userService: UserService) {
        super(apollo);
    }

    /**
     * Registers a user and returns any registration errors that might occur
     */
    async register(registerModel: RegisterModel): Promise<RegisterError> {
        assert(registerModel);
        assert(registerModel.username);
        assert(registerModel.password);

        // send the login request
        let mutationResponse;
        try {
             mutationResponse = await this.mutate({
                mutation: registerMutation,
                variables: registerModel
            });
        } catch (err){
            // if there is an error, return the LoginError
            switch(err.type){
                default:
                    return RegisterError.UNKNOWN;
            }
        }

        // if there are no error, then create a user from the response and set it in the state
        const user = new User(mutationResponse);
        this.userService.setUser(user);
    }
}
