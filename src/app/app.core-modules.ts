import {NgModule} from '@angular/core';

import * as Services from "./services";
import * as Guards from "./guards";

@NgModule({
  providers: [
    Services.SourceSentenceService,
    Services.Auth,
    Services.UserService,

    Guards.AuthGuard
  ]
})
export class AppCoreModule {
}
