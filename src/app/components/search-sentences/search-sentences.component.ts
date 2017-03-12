import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from "rxjs";
import {ApolloQueryResult} from "apollo-client";

import {SourceSentenceService} from "../../services";
import {SourceSentence} from "../../models";

@Component({
  templateUrl: './search-sentences.component.html',
  styleUrls: ['./search-sentences.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchSentencesComponent {
  searchQuery: string;
  searchResults: Observable<ApolloQueryResult<SourceSentence[]>>;

  constructor(private sourceSentenceService: SourceSentenceService) {
    this.searchQuery = "evolve";

    this.search();
  }

  public searchQueryChanged(newSearchQuery: string): void {
    this.searchQuery = newSearchQuery;

    this.search();
  }

  private search(): void {
    this.searchResults = this.sourceSentenceService.search(this.searchQuery);
  }
}
