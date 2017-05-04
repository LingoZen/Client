import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MdButtonModule, MdCardModule, MdInputModule, MdSelectModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ApolloModule} from "apollo-angular";
import {StoreModule} from "@ngrx/store";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {provideApolloClient} from "./apollo-client";
import {AppCoreModule} from "./app.core-modules";

import {SearchSentencesComponent} from "./components/search-sentences/search-sentences.component";
import {SentenceComponent} from "./components/sentence/sentence.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HeaderComponent} from "./components/header/header.component";
import {SentenceSearchResultComponent} from "./components/sentence-search-result/sentence-search-result.component";
import {HomeComponent} from "./components/home/home.component";
import {storeReducers} from "./states/store-reducers";
import {UnregisteredComponent} from "./components/unregistered/unregistered-page.component";
import {SentenceSearchBarComponent} from "./components/sentence-search-bar/sentence-search-bar.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CapitalizePipe} from "./pipes/capitalize.pipe";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        FlexLayoutModule,
        AppCoreModule,
        ApolloModule.forRoot(provideApolloClient),
        StoreModule.provideStore(storeReducers),

        // Material Modules
        MdButtonModule,
        MdSelectModule,
        MdInputModule,
        MdCardModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SearchSentencesComponent,
        SentenceComponent,
        LoginComponent,
        RegisterComponent,
        UnregisteredComponent,
        SentenceSearchBarComponent,
        HeaderComponent,
        SentenceSearchResultComponent,

        CapitalizePipe
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
