let message: string = 'Hello World';
console.log(message);

let a1 : string[] = ["arne", "malte", "dörte"];


class Person {
 private _alter: number = 0;

    constructor(private firstname:string , private surname:string) {
        
    }

    public getFullName(){
        return this.firstname + " "+ this.surname;
    }

    
    public get alter() : number {
        return this._alter;
    }

    
    public set alter(v : number) {
        this._alter = v;
    }
    
    

}

const arne = new Person("arne", "reith");