interface Product{
    name:string;
    price:number;
    available?:boolean;
}

let products : Product[] = [
    {name:"test0", price:100},
    {name:"test1", price:200},
    {name:"test2", price:300},
    {name:"test3", price:400},
    {name:"test4", price:500},
];

let over189 = (p:Product) => {
    return p.price >189;
}

products.filter(over189).forEach(elem => console.log(elem));