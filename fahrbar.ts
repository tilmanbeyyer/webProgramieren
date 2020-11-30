interface Fahrbar{
    beschleunige(faktor: number):void;
    bremse(faktor:number):void;
}

class Fahrrad implements Fahrbar{
    constructor(currentSpeed : number) {
        
    }
    beschleunige(faktor: number): void {
        throw new Error("Method not implemented.");
    }
    bremse(faktor: number): void {
        throw new Error("Method not implemented.");
    }
}