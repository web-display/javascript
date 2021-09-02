function Foo() {
	// ...
}
console.log(
	'Foo.prototype.constructor === Foo',
	Foo.prototype.constructor === Foo,
)
var a = new Foo()
console.log('a.constructor === Foo', a.constructor === Foo)
