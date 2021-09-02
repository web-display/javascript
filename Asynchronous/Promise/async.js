async function test1() {
  return 1
}
async function test2() {
  return Promise.resolve( 2 )
}
const result1 = test1(),
  result2 = test2()
console.log( 'result1', result1 )
console.log( 'result2', result2 )
async function test3() {
  const p3 = Promise.resolve( 3 )
  p3.then( res => console.log( res ) )
  const data3 = await p3
  console.log( `data3:${data3}` )
}
test3()

async function test4() {
  const data4 = await 4 //await Promise.resolve(4)
  console.log( 'data4:', data4 )
}
test4()

async function test5() {
  const data5 = await test1()
  console.log( 'data5', data5 )
}
test5()

async function test6() {
  try {
    const data6 = Promise.reject( 6 )
  } catch ( err ) {
    console.error( 'err', err )
  }

}
test6()




























