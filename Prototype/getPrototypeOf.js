function Fun() {}
function Bun() {}
var a = new Fun();
console.log(1);
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(a) === Bun.prototype);
Object.getPrototypeOf(a) === Fun.prototype;
