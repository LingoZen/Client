import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {SentenceComponent} from "./components/sentence/sentence.component";
import {SearchSentencesComponent} from "./components/search-sentences/search-sentences.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: []
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: []
  },
  {
    path: 'sentences',
    component: SearchSentencesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sentences/:sentenceId',
    component: SentenceComponent,
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
