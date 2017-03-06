import {NgModule} from '@angular/core';

import * as Services from "./services";

@NgModule({
  providers: [
    Services.SourceSentenceService
  ]
})
export class AppCoreModule {
}
