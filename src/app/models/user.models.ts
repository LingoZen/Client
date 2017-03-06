import {BaseModel} from "./base-model.model";

export class User extends BaseModel {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  lastLoginDate: Date;

  constructor(user: any) {
    super(user);

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.lastLoginDate = user.lastLoginDate;
  }
}
