import {Component, EventEmitter, Output} from '@angular/core';


import {SearchQuery} from "../../interfaces/search-query.model";
import {Language} from "../../models/language.models";
import {SourceSentenceService} from "../../services/source-sentence.service";

@Component({
  selector: 'app-sentence-search-bar',
  templateUrl: './sentence-search-bar.component.html',
  styleUrls: ['./sentence-search-bar.component.scss']
})
export class SentenceSearchBarComponent {
  @Output() searchQueryChanged: EventEmitter<SearchQuery>;
  searchString: string;
  searchLanguage: Language;
  languageOptions: Language[];

  constructor(private sourceSentenceService: SourceSentenceService) {
    this.searchString = "evolve";
    this.searchLanguage = new Language({id: 'eng'});
    this.searchQueryChanged = new EventEmitter();

    // todo: make the language options come from configuration
    this.languageOptions = [
      new Language({
        id: 'eng',
        name: "english",
      }),
      new Language({
        id: 'spa',
        name: "spanish",
      }),
      new Language({
        id: 'fra',
        name: "français",
      })
    ];
  }

  public changeSearchString(searchString: string): void {
    this.searchString = searchString;
    this.emitSearchQueryChanged();
  }

  public changeSearchLanguage(searchLanguage: Language): void {
    this.searchLanguage = searchLanguage;
    this.emitSearchQueryChanged();
  }

  /**
   * uses this.searchString, and this.searchLanguage to emit to allow it be called from different functions.
   * do not change this to use parameters
   */
  private emitSearchQueryChanged() {
    this.searchQueryChanged.emit(<SearchQuery> {language: this.searchLanguage, searchString: this.searchString});
  }
}
