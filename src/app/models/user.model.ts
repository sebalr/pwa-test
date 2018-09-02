import { IEntity } from "./entity.model";

export class User implements IEntity{

    private _id: number;
    private _name: string;
    private _email: string;

    public constructor(user?: any) {
        if(user != null){
            this.generateModel(user);
        }
    }
    
   public generateModel(json: any):void {
    if (json == null) return;
    if(json['id']!=null){this._id = json['id'];}
    if(json['name']!=null){this._name = json['name'];}
    if(json['email']!=null){this._email = json['email'];}
   }
}
