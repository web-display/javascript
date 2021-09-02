const p = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    reject( 1 )
  } )
} )

setTimeout( () => {
  console.log( 'p', p )
} );