import {AfterViewInit, Component, EventEmitter, Output} from "@angular/core";
import {List} from "immutable";

import {SearchQuery} from "../../interfaces/search-query.interface";
import {Language} from "../../models/language.models";
import {SourceSentenceService} from "../../services/source-sentence.service";

@Component({
    selector: 'app-sentence-search-bar',
    templateUrl: './sentence-search-bar.component.html',
    styleUrls: ['./sentence-search-bar.component.scss']
})
export class SentenceSearchBarComponent implements AfterViewInit {
    @Output() search: EventEmitter<SearchQuery>;
    searchString: string;
    searchLanguage: Language;
    languageOptions: List<Language>;

    constructor(private sourceSentenceService: SourceSentenceService) {
        // todo: make the language options come from configuration
        this.languageOptions = List.of(...[
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
        ]);

        this.searchString = "evolve";
        this.searchLanguage = this.languageOptions.get(0);
        console.log(this.searchLanguage);
        this.search = new EventEmitter();
    }

    ngAfterViewInit(): void {
        this.emitSearch();
    }

    /**
     * uses this.searchString, and this.searchLanguage to emit to allow it be called from different functions.
     * do not change this to use parameters
     */
    private emitSearch() {
        this.search.emit(<SearchQuery> {language: this.searchLanguage, searchString: this.searchString});
    }
}
