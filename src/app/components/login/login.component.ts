import {Component} from '@angular/core';
import {Auth} from "../../services";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private auth: Auth) {
  }
}
