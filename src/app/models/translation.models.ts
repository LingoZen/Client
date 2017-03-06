import {BaseModel} from "./base-model.model";
import {Language} from "./language.models";
import {User} from "./user.models";
import {SourceSentence} from "./source-sentence.models";

export class Translation extends BaseModel {
  text: string;
  user: User;
  language: Language;
  sourceSentence: SourceSentence;

  constructor(translation: any) {
    super(translation);

    this.text = translation.text;
    this.user = translation.user;
    this.language = translation.language;
    this.sourceSentence = translation.sourceSentence;
  }
}
