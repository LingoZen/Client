import {User} from "../models/user.models";

export interface AppState {
    readonly user: User;
}
