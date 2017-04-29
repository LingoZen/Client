import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import {User} from "../models/user.models";
import {AppState} from "../states/app-state.interface";

@Injectable()
export class UserService {
    private _user: Observable<User>;
    private _loggedIn: boolean;

    constructor(private store: Store<AppState>) {
        this._user = store.select('user');
        this._user.subscribe(user => this._loggedIn = !!user); //we want bool not user. !! will turn a truthy into true, and a falsy into false
    }

    setUser(user: User) {
        this.store.dispatch({type: 'SET_USER', payload: user});
    }

    get user(): Observable<User> {
        return this._user;
    }

    get loggedIn(): boolean {
        return this._loggedIn;
    }

    set loggedIn(_) {
        throw new Error(`Cannot directly set logged in`);
    }
}
