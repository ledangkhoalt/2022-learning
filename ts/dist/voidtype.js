var myFunction = function () {
    console.log("void");
};
var foo = "foo";
console.log(foo.bar());
var myNeverFunction = function () {
    throw "never";
    console.log("void");
};
var vAny = 10;
var vUnknown = 10;
var v1 = vAny;
// let v2: string = vUnknown;
console.log(vAny.method());
//console.log(vUnknown.method());
