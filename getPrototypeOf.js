function Fun() {}
var a = new Fun();
Object.getPrototypeOf(a);
Object.getPrototypeOf(a) === Fun.prototype;
