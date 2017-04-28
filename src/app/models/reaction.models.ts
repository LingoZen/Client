import {BaseModel} from "./base-model.model";
import {SourceSentence} from "./source-sentence.models";
import {User} from "./user.models";
import {Comment} from "./comment.models";
import {Translation} from "./translation.models";
import {ReactionType} from "../enums/reaction-type.enum";

export class Reaction extends BaseModel {
  type: ReactionType;
  user: User;
  sourceSentence: SourceSentence;
  translation: Translation;
  comment: Comment;

  constructor(reaction: any) {
    super(reaction);

    if (!reaction) {
      return;
    }

    this.type = reaction.type;
    this.user =
      reaction.user instanceof User ?
        reaction.user :
        new User(reaction.user);
    this.sourceSentence =
      reaction.sourceSentence instanceof SourceSentence ?
        reaction.sourceSentence :
        new SourceSentence(reaction.sourceSentence);
    this.translation =
      reaction.translation instanceof Translation ?
        reaction.translation :
        new Translation(reaction.translation);
    this.comment =
      reaction.comment instanceof Comment ?
        reaction.comment :
        new Comment(reaction.comment);
  }
}
