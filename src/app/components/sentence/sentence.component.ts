import {ActivatedRoute} from "@angular/router";
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ApolloQueryResult} from "apollo-client";
import {Observable} from "rxjs";

import {SourceSentence} from "../../models/source-sentence.models";
import {SourceSentenceService} from "../../services/source-sentence.service";


@Component({
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SentenceComponent {
  sentence: Observable<ApolloQueryResult<SourceSentence>>;

  constructor(private sourceSentenceService: SourceSentenceService,
              private route: ActivatedRoute) {
    this.sentence = sourceSentenceService.getSourceSentence(this.route.snapshot.params['sentenceId']);
  }
}
