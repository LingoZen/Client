import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import * as Components from "./components";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: Components.HomePageComponent
  },
  {
    path: 'login',
    component: Components.LoginComponent,
    canActivate: []
  },
  {
    path: 'register',
    component: Components.RegisterComponent,
    canActivate: []
  },
  {
    path: 'sentences',
    component: Components.SearchSentencesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sentences/:sentenceId',
    component: Components.SentenceComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
