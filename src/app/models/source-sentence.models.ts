import {BaseModel} from "./base-model.model";
import {Language} from "./language.models";
import {User} from "./user.models";

export class SourceSentence extends BaseModel {
  text: string;
  user: User;
  language: Language;

  constructor(sentence: any) {
    super(sentence);

    this.text = sentence.text;
    this.user = sentence.user;
    this.language = sentence.language;
  }
}
