import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import * as Components from "./components";

const routes: Routes = [
  {
    path: '',
    component: Components.HomePageComponent
  },
  {
    path: 'sentences/:sentenceId',
    component: Components.SentenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
