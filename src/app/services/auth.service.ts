import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from "@angular/router";
import {UserService} from "./user.service";

declare const Auth0Lock: any; //avoid name not found warnings

const auth0ClientId = `HGoQE2cE4YCWqXwCA6Tqj3IQ5xJNmmSG`;
const auth0Domain = `lingozen.auth0.com`;
const jwtTokenName = `id_token`; //changing this requires changing how tokenNotExpired() is called

@Injectable()
export class Auth {
  private _lock;

  constructor(private router: Router, private userService:UserService) {
    this._lock = new Auth0Lock(auth0ClientId, auth0Domain, {});

    // Add callback for lock `authenticated` event
    this._lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, (err, profile) => {
        if (err) {
          throw new Error(err);
        }

        this.userService.setUserWithLoginProfile(profile);
        localStorage.setItem(jwtTokenName, authResult.idToken);
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this._lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem(jwtTokenName);
  }

  get lock() {
    return this._lock;
  }

  set lock(newLock) {
    console.error('cannot set lock');
    return;
  }
}
