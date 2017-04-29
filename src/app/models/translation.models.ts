import {BaseModel} from "./base-model.model";
import {Language} from "./language.models";
import {User} from "./user.models";
import {SourceSentence} from "./source-sentence.models";
import {Reaction} from "./reaction.models";
import {Comment} from "./comment.models";

export class Translation extends BaseModel {
    text: string;
    user: User;
    sourceSentence: SourceSentence;
    language: Language;
    comments: Comment[];
    reaction: Reaction[];

    constructor(translation: any) {
        super(translation);

        if (!translation) {
            return;
        }

        this.text = translation.text;
        this.user =
            translation.user instanceof User ?
                translation.user :
                new User(translation.user);
        this.sourceSentence =
            translation.sourceSentence instanceof SourceSentence ?
                translation.sourceSentence :
                new SourceSentence(translation.sourceSentence);
        this.language =
            translation.language instanceof Language ?
                translation.language :
                new Language(translation.language);
        this.comments = translation.comments && translation.comments.map((comment) => (
                comment instanceof Comment ?
                    comment :
                    new Comment(comment)
            ));
        this.reaction = translation.reaction && translation.reaction.map((reaction) => (
                reaction instanceof Reaction ?
                    reaction :
                    new Reaction(reaction)
            ));
    }
}
