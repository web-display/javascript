const p = Promise.resolve( 1000 )
p.then( data => { console.log( 'data', data ) } )
console.log( p )