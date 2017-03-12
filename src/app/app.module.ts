import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ApolloModule} from 'apollo-angular';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideApolloClient} from './apollo-client';
import {AppCoreModule} from "./app.core-modules";
import {storeReducers} from "./states";

import * as Components from "./components";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    AppCoreModule,
    ApolloModule.forRoot(provideApolloClient),
    StoreModule.provideStore(storeReducers)
  ],
  declarations: [
    AppComponent,

    Components.HomePageComponent,
    Components.SearchSentencesComponent,
    Components.SentenceComponent,

    Components.HeaderComponent,
    Components.SentenceSearchResultComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
