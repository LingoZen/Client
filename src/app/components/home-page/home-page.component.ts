import {Component} from '@angular/core';
import {Auth} from "../../services";

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private auth: Auth) {

  }
}
