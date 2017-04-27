import {Component} from '@angular/core';
import {Auth} from "../../services";

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private auth: Auth) {
  }
}
