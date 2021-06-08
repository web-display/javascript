// 词法作用域
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  bar();
}
foo();

// closure
function fun() {
  var a = 22;
  function bar() {
    console.log(a);
  }
  return bar;
}
var baz = fun();
baz();

// closure
function closure() {
  var b = 33;
  function bar() {
    console.log(b);
  }
  bab(bar);
}
closure();
function bab(fn) {
  fn();
}
//-------------------------进阶------------------------------
