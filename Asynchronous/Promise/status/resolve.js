const p = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    resolve( 1 )
  } )
} )
setTimeout( () => { console.log( p ) } )