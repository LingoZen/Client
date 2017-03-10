import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {SourceSentenceService} from "../services";
import {SourceSentence} from "../models";

@Component({
  selector: 'sentence-search-result',
  templateUrl: './sentence-search-result.component.html',
  styleUrls: ['./sentence-search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SentenceSearchResultComponent {
  @Input() sentence: SourceSentence;

  constructor(private sourceSentenceService: SourceSentenceService) {
  }
}
