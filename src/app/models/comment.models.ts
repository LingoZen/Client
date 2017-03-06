import {BaseModel} from "./base-model.model";
import {User} from "./user.models";
import {SourceSentence} from "./source-sentence.models";
import {Language} from "./language.models";
import {Translation} from "./translation.models";

export class Comment extends BaseModel {
  text: string;
  user: User;
  sourceSentence: SourceSentence;
  translation: Translation;
  language: Language;

  constructor(translation: any) {
    super(translation);

    this.text = translation.text;
    this.user = translation.user;
    this.sourceSentence = translation.sourceSentence;
    this.translation = translation.translation;
    this.language = translation.language;
  }
}
