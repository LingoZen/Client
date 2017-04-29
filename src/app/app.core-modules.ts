import {NgModule} from "@angular/core";

import {UserService} from "./services/user.service";
import {SourceSentenceService} from "./services/source-sentence.service";
import {AuthGuard} from "./guards/auth.guard";
import {LoginService} from "./services/login.service";
import {RegisterService} from "./services/register.service";

@NgModule({
    providers: [
        SourceSentenceService,
        UserService,
        LoginService,
        RegisterService,

        AuthGuard
    ]
})
export class AppCoreModule {
}
