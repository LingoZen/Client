import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from "@angular/material";
import {ApolloModule} from 'apollo-angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideApolloClient} from './apollo-client';
import {AppCoreModule} from "./app.core-modules";

import * as Components from "./components";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    AppCoreModule,
    ApolloModule.forRoot(provideApolloClient)
  ],
  declarations: [
    AppComponent,
    Components.HomePageComponent,
    Components.SentenceComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
