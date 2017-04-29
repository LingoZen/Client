import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {SourceSentence} from "../../models/source-sentence.models";
import {SourceSentenceService} from "../../services/source-sentence.service";


@Component({
    selector: 'app-sentence-search-result',
    templateUrl: './sentence-search-result.component.html',
    styleUrls: ['./sentence-search-result.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SentenceSearchResultComponent {
    @Input() sentence: SourceSentence;

    constructor(private sourceSentenceService: SourceSentenceService) {
    }
}
