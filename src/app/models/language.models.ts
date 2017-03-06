import {BaseModel} from "./base-model.model";

export class Language extends BaseModel {
  name: string;
  englishName: string;

  constructor(comment: any) {
    super(comment);

    this.name = comment.name;
    this.englishName = comment.englishName;
  }
}
