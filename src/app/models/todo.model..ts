export class Todo{

    private _id: number;
    private _userID: number;
    private _title: string;
    private _completed: boolean;

    public constructor(todo?: any) {
        if(todo != null){
            this.generateModel(todo);
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
     * Getter completed
     * @return {boolean}
     */
	public get completed(): boolean {
		return this._completed;
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
     * @param {boolean} value
     */
	public set completed(value: boolean) {
		this._completed = value;
	}
    
   public generateModel(json: any):void {
    if (json == null) return;
    if(json['id']!=null){this._id = json['id'];}
    if(json['userId']!=null){this._userID = json['userId'];}
    if(json['title']!=null){this._title = json['title'];}
    if(json['completed']!=null){this._completed = json['completed'];}
   }
}
