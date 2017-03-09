import {BaseModel} from "./base-model.model";
import {User} from "./user.models";
import {SourceSentence} from "./source-sentence.models";
import {Language} from "./language.models";
import {Translation} from "./translation.models";
import {Reaction} from "./reaction.models";

export class Comment extends BaseModel {
  text: string;
  user: User;
  sourceSentence: SourceSentence;
  translation: Translation;
  reactions: Reaction[];
  language: Language;

  constructor(comment: any) {
    super(comment);

    if (!comment) {
      return;
    }

    this.text = comment.text;
    this.user =
      comment.user instanceof User ?
        comment.user :
        new User(comment.user);
    this.sourceSentence =
      comment.sourceSentence instanceof SourceSentence ?
        comment.sourceSentence :
        new SourceSentence(comment.sourceSentence);
    this.translation =
      comment.translation instanceof Translation ?
        comment.translation :
        new Translation(comment.translation);
    this.language =
      comment.language instanceof Language ?
        comment.language :
        new Language(comment.language);
    this.reactions = comment.reactions && comment.reactions.map((reaction) => (
        reaction instanceof Reaction ?
          reaction :
          new Reaction(reaction)
      ));
  }
}
