//当resolve没有异常时，不会改变为rejected状态
// Promise.resolve().then( () => {
//   console.log( 1 ) //1
// } ).catch( () => {
//   console.log( 2 ) //未执行
// } ).then( () => {
//   console.log( 3 ) //3
// }  )

// //当then 返回异常的时候catch会执行，注意！catch 的回调函数没有返回异常的时候，会执行then
// Promise.resolve().then( () => {
//   console.log( 1 ) //1
//   throw new Error( 'error1' )
// } ).catch( () => {
//   console.log( 2 ) //2
// } ).then( () => {
//   console.log( 3 ) //3
// } )


Promise.resolve().then( () => { //返回rejected,catch 会执行
  console.log( 1 )
  throw new Error( 'error3' )
} ).catch( () => { //返回fullfilled,catch不会执行
  console.log( 2 )
} ).catch( () => {
  console.log( 3 )
} ).then( () => {//此处会执行，并返回fullfilled
  console.log( 4 )
} )