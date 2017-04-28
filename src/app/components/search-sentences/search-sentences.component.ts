import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ApolloQueryResult} from "apollo-client";

import {SearchQuery} from "../../interfaces/search-query.model";
import {SourceSentence} from "../../models/source-sentence.models";
import {SourceSentenceService} from "../../services/source-sentence.service";

@Component({
  selector: 'app-search-sentences',
  templateUrl: './search-sentences.component.html',
  styleUrls: ['./search-sentences.component.scss']
})
export class SearchSentencesComponent {
  searchResults: Observable<ApolloQueryResult<SourceSentence[]>>;

  constructor(private sourceSentenceService: SourceSentenceService) {
  }

  public changeSearchQuery(newSearchQuery: SearchQuery): void {
    this.search(newSearchQuery);
  }

  private search(searchQuery: SearchQuery): void {
    this.searchResults = this.sourceSentenceService.search(searchQuery);
  }
}
