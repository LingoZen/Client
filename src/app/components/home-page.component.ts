import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {SourceSentenceService} from "../services";
import {ApolloQueryResult} from "apollo-client";
import {SourceSentence} from "../models";

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  searchQuery:string;
  searchResults:Observable<ApolloQueryResult<SourceSentence[]>>;

  constructor(private sourceSentenceService:SourceSentenceService) {
    this.searchQuery = "evolve";

    this.search();
  }

  public searchQueryChanged(newSearchQuery:string) {
    this.searchQuery = newSearchQuery;

    this.search();
  }

  private search() {
    this.searchResults = this.sourceSentenceService.search(this.searchQuery);
  }
}
