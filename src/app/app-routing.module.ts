import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import * as Components from "./components";

const routes: Routes = [
  {
    path: '',
    component: Components.HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
