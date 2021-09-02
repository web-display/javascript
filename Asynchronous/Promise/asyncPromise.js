function getData() {
  return $.ajax( {
    url: 'http://localhost:3000/data/user.json',
  } )

}
async function doSth() {
  const data = await getData()
  console.log( "data", data )
}
console.log( "i am sync1" )
doSth()


//i am sync
//"data" data