const myFunction =  (): void=> {
    console.log("void")
}

let foo: any = "foo";
console.log(foo.bar());

const myNeverFunction =  (): never=> {
    throw "never";
    console.log("void")
}

let vAny: any = 10;
let vUnknown: unknown = 10;

let v1: string = vAny;
// let v2: string = vUnknown;
console.log(vAny.method());
//console.log(vUnknown.method());

let str: string = "10";
let num : number = (str as unknown) as number
