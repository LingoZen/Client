export class BaseModel {
  id: string;
  createdDate: Date;
  lastModifiedDate: Date;

  constructor(model: any) {
    this.id = model.id;
    this.createdDate = model.createdDate;
    this.lastModifiedDate = model.lastModifiedDate;
  }
}
