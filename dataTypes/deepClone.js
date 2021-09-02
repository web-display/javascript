const obj1 = {
  name: "wang",
  age: 20,
  address: {
    city: "shanghai",
  },
  arr: [ "a", "b", "c" ],
};

const obj2 = deepClone( obj1 );

function deepClone( obj = {} ) {
  //判断是否为对象
  if ( typeof obj !== "object" || obj == null ) {
    return obj;
  }
  //判断是数组还是对象,初始化返回结果
  let result;
  if ( obj instanceof Array ) {
    result = [];
  } else {
    result = {};
  }
  //递归obj
  for ( let key in obj ) {
    if ( obj.hasOwnProperty( key ) ) {
      result[ key ] = deepClone( obj[ key ] )
    }
  }
  // 返回结果
  return result
}

