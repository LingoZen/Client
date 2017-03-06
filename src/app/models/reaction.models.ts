import {BaseModel} from "./base-model.model";
import {SourceSentence} from "./source-sentence.models";
import {User} from "./user.models";
import {Comment} from "./comment.models";
import {ReactionType} from "../enums";
import {Translation} from "./translation.models";

export class Reaction extends BaseModel {
  type: ReactionType;
  sourceSentence: SourceSentence;
  translation: Translation;
  user: User;
  comment: Comment;

  constructor(comment: any) {
    super(comment);

    this.type = comment.type;
    this.sourceSentence = comment.sourceSentence;
    this.translation = comment.translation;
    this.user = comment.user;
    this.comment = comment.comment;
  }
}
