let promise = new Promise( ( resolve, reject ) => {
  reject( '承诺违背' );
} );
promise
  .then( ( res ) => {
    console.log( res );
  } )
  .then( ( res ) => { } )
  .then(
    ( res ) => { },
    ( err ) => {
      console.log( 'then', err );
    }
  )
  .catch( ( err ) => console.log( 'catch', err ) );
