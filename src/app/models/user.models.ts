import {BaseModel} from "./base-model.model";
import {SourceSentence} from "./source-sentence.models";
import {Translation} from "./translation.models";
import {Comment} from "./comment.models";
import {Reaction} from "./reaction.models";

export class User extends BaseModel {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  lastLoginDate: Date;
  sourceSentences: SourceSentence[];
  translations: Translation[];
  comments: Comment[];
  reactions: Reaction[];

  constructor(user: any) {
    super(user);

    if (!user) {
      return;
    }

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.lastLoginDate = user.lastLoginDate;
    this.sourceSentences = user.sourceSentences && user.sourceSentences.map((sourceSentence) => (
        sourceSentence instanceof SourceSentence ?
          sourceSentence :
          new SourceSentence(sourceSentence)
      ));
    this.translations = user.translations && user.translations.map((translation) => (
        translation instanceof Translation ?
          translation :
          new Translation(translation)
      ));
    this.comments = user.comments && user.comments.map((comment) => (
        comment instanceof Comment ?
          comment :
          new Comment(comment)
      ));
    this.reactions = user.reactions && user.reactions.map((reaction) => (
        reaction instanceof Reaction ?
          reaction :
          new Reaction(reaction)
      ));
  }
}
