const a = 0
let b = 1
var c = 2
function fn() {
  console.log( "a", this.a )
  console.log( "b", this.b )
  console.log( 'c', this.c )
}
fn()
