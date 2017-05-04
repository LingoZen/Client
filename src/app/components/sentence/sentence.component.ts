import {ActivatedRoute} from "@angular/router";
import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

import {SourceSentence} from "../../models/source-sentence.models";
import {SourceSentenceService} from "../../services/source-sentence.service";

@Component({
    templateUrl: './sentence.component.html',
    styleUrls: ['./sentence.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class SentenceComponent implements OnInit {
    sentenceId: string;
    sentence: SourceSentence;

    constructor(private sourceSentenceService: SourceSentenceService,
                private route: ActivatedRoute) {
    }

    async ngOnInit(): Promise<void> {
        const id = this.route.snapshot.params['sentenceId'];
        this.sentence = await this.sourceSentenceService.getSourceSentence(id);
    }
}
