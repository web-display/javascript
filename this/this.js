function identify() {
  return this.name.toUpperCase();
}
function speak() {
  const greeting = "Hello,i'm " + identify.call(this);
  console.log(greeting);
}
const me = { name: "Wang" };
const you = { name: "Li" };
speak.call(me);
speak.call(you);
