export class BaseModel {
    id: string;
    createdDate: Date;
    lastModifiedDate: Date;

    constructor(model: any) {
        if (!model) {
            return;
        }

        this.id = model.id;
        this.createdDate = model.createdDate;
        this.lastModifiedDate = model.lastModifiedDate;
    }
}
