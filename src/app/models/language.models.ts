import {BaseModel} from "./base-model.model";
import {SourceSentence} from "./source-sentence.models";
import {Translation} from "./translation.models";
import {Comment} from "./comment.models";

export class Language extends BaseModel {
    name: string;
    englishName: string;
    sourceSentences: SourceSentence[];
    translations: Translation[];
    comments: Comment[];

    constructor(language: any) {
        super(language);

        if (!language) {
            return;
        }

        this.name = language.name;
        this.englishName = language.englishName;
        this.sourceSentences = language.sourceSentences && language.sourceSentences.map((sourceSentence) => (
                sourceSentence instanceof SourceSentence ?
                    sourceSentence :
                    new SourceSentence(sourceSentence)
            ));
        this.translations = language.translations && language.translations.map((translation) => (
                translation instanceof Translation ?
                    translation :
                    new Translation(translation)
            ));
        this.comments = language.comments && language.comments.map((comment) => (
                comment instanceof Comment ?
                    comment :
                    new Comment(comment)
            ));
    }
}
