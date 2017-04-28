import {Injectable} from "@angular/core";
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";

import {User} from "../models/user.models";
import {AppState} from "../states/app-state.interface";

@Injectable()
export class UserService {
  private user: Observable<User>;
  private loggedIn: boolean;

  constructor(private store: Store<AppState>) {
    this.user = store.select('user');
    this.user.subscribe(user => this.loggedIn = !!user); //we want bool not user. !! will turn a truthy into true, and a falsy into false
  }

  public setUser(user: User): void {
    this.store.dispatch({type: 'SET_USER', payload: user});
  }

  public getUser(): Observable<User> {
    return this.user;
  }

  public isUserLoggedIn(){
    return this.loggedIn;
  }
}
