import { IEntity } from "./entity.model";

export class Post implements IEntity{

    private _id: number;
    private _userID: number;
    private _title: string;
    private _body: string;

    public constructor(post?: any) {
        if(post != null){
            this.generateModel(post);
        }
    }


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter userID
     * @return {number}
     */
	public get userID(): number {
		return this._userID;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter body
     * @return {string}
     */
	public get body(): string {
		return this._body;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter userID
     * @param {number} value
     */
	public set userID(value: number) {
		this._userID = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter completed
     * @param {string} value
     */
	public set body(value: string) {
		this._body = value;
	}
    
   public generateModel(json: any):void {
    if (json == null) return;
    if(json['id']!=null){this._id = json['id'];}
    if(json['userId']!=null){this._userID = json['userId'];}
    if(json['title']!=null){this._title = json['title'];}
    if(json['body']!=null){this._body = json['body'];}
   }
}
