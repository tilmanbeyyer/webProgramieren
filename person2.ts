interface Person2{
    firstname:string;
    surname:string;
    alter?:number;
    geschlecht: ("M" | "F");
}

let p1: Person2 = {
    firstname:"",
    surname: "",
    geschlecht: "M",
}