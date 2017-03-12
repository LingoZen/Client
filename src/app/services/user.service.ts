import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";

import {User} from "../models/user.models";

@Injectable()
export class UserService {
  constructor() {
  }

  public setUserWithLoginProfile(userProfile: any): User {
    //todo: set user in store

    return null;
  }
}
