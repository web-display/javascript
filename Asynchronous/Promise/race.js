const fs = require( 'fs' )

function readFile( path, isSetError ) {
  return new Promise( ( resolve, reject ) => {
    fs.readFile( path, 'utf-8', ( err, data ) => {
      if ( err || isSetError ) {
        reject( '承诺失败了' )
      }
      const resData = JSON.parse( data )
      resolve( resData )
    } )
  } )
}
Promise.race( [
  // readFile( './data/user.json', true ),
  readFile( './data/user.json' ),
  readFile( './data/course.json' ),
  readFile( './data/userCourse.json' )
] )
  .then( res => { console.log( res ) } )
  .catch( err => console.log( err ) )