function muti( num ) {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve( num * num )
    }, 2000 )
  } )
}
const list = [ 1, 2, 3, ]
// list.forEach( async ( item ) => {
//   const data = await muti( item )
//   console.log( data )
// } )
!( async () => {
  for ( const item of list ) {
    const res = await muti( item )
    console.log( res )
  }
} )()