import {NgModule} from '@angular/core';

import {UserService} from "./services/user.service";
import {SourceSentenceService} from "./services/source-sentence.service";
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  providers: [
    SourceSentenceService,
    UserService,

    AuthGuard
  ]
})
export class AppCoreModule {
}
