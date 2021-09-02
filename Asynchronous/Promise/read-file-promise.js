const fs = require( 'fs' )
/*读取文件 
*path:文件路径
*preData:
*/
const uid = 2
function readFile( path, preData ) {
  return new Promise( ( resolve, reject ) => {
    fs.readFile( path, 'utf-8', ( err, data ) => {
      if ( err ) { reject( err ) }
      const resData = JSON.parse( data )
      // throw new Error( 'its faild' )
      resolve( { preData, resData } )
    } )
  } )
}
readFile( './data/user.json' )
  .then( res => {
    const { resData } = res,
      userInfo = resData.filter( item => item.id === uid )[ 0 ]
    return readFile( './data/userCourse.json', userInfo )
  } )
  .then( res => {
    const { preData, resData } = res,
      userId = preData.id,
      userCourse = resData.filter( item => item.uid === userId )[ 0 ]
    return readFile( './data/course.json', { userCourse, username: preData.username } )
  } )
  .then( res => {
    const { preData, resData } = res,
      userCourses = preData.userCourse.courses
    let _arr = []
    userCourses.map( id => {
      resData.map( item => {
        if ( item.id === id ) {
          _arr.push( item )
        }
      } )
    } )
    const userCourseInfo = {
      username: preData.username,
      courses: _arr
    }
    fs.writeFileSync( `./data/${userCourseInfo.username}.json`, JSON.stringify( userCourseInfo ) )
  } )
  .catch( err => {
    console.log( err )
  } )