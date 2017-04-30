import {Component} from "@angular/core";

import {UserService} from "./services/user.service";
import {User} from "./models/user.models";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private userService: UserService) {
        this.userService.setUser(new User({id: 1, username: `devDefault`, name: 'Dev Default'}));
    }
}
