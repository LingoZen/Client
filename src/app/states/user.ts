import {Action} from '@ngrx/store';
import {User} from "../models/user.models";

export function userReducer(state: User = null, action: Action): User {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;

    case 'CLEAR':
      return null;

    default:
      return state;
  }
}
