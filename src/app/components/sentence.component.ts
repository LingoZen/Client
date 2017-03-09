import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {SourceSentenceService} from "../services";
import {ApolloQueryResult} from "apollo-client";
import {SourceSentence} from "../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent {
  sentence: Observable<ApolloQueryResult<SourceSentence>>;

  constructor(private sourceSentenceService: SourceSentenceService,
              private route: ActivatedRoute) {
    this.sentence = sourceSentenceService.getSourceSentence(this.route.snapshot.params['sentenceId']);
  }
}
