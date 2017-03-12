import {Component} from '@angular/core';
import {Auth} from "../../services";

@Component({
  selector: 'lz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private auth: Auth) {
  }
}
