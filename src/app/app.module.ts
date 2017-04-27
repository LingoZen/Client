import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdButtonModule} from "@angular/material";
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
    FlexLayoutModule,
    AppCoreModule,
    ApolloModule.forRoot(provideApolloClient),
    StoreModule.provideStore(storeReducers),

    // Material Modules
    MdButtonModule
  ],
  declarations: [
    AppComponent,

    Components.HomePageComponent,
    Components.SearchSentencesComponent,
    Components.SentenceComponent,
    Components.LoginComponent,
    Components.RegisterComponent,

    Components.HeaderComponent,
    Components.SentenceSearchResultComponent
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
