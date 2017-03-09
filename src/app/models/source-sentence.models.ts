import {BaseModel} from "./base-model.model";
import {Language} from "./language.models";
import {User} from "./user.models";
import {Translation} from "./translation.models";
import {Reaction} from "./reaction.models";
import {Comment} from "./comment.models";

export class SourceSentence extends BaseModel {
  text: string;
  user: User;
  language: Language;
  reactions: Reaction[];
  comments: Comment[];
  translations: Translation[];

  constructor(sourceSentence: any) {
    super(sourceSentence);

    if (!sourceSentence) {
      return;
    }

    this.text = sourceSentence.text;
    this.user =
      sourceSentence.user instanceof User ?
        sourceSentence.user :
        new User(sourceSentence.user);
    this.language =
      sourceSentence.language instanceof Language ?
        sourceSentence.language :
        new Language(sourceSentence.language);
    this.reactions = sourceSentence.reactions && sourceSentence.reactions.map((reaction) => (
        reaction instanceof Reaction ?
          reaction :
          new Reaction(reaction)
      ));
    this.comments = sourceSentence.comments && sourceSentence.comments.map((comment) => (
        comment instanceof Comment ?
          comment :
          new Comment(comment)
      ));
    this.translations = sourceSentence.translations && sourceSentence.translations.map((translation) => (
        translation instanceof Translation ?
          translation :
          new Translation(translation)
      ));
  }
}
