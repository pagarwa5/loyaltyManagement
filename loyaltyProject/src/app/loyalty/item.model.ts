export class Item{
    public name:string;
    public id:string;
    public amount:number;
    public points:number;
    public imageUrl:string;

    constructor(name:string,id:string,amount:number,points:number,imageUrl:string){
        this.name=name;
        this.id=id;
        this.amount = amount;
        this.points = points;
        this.imageUrl = imageUrl;
    }
}