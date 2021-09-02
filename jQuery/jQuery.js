class Jquery {
  constructor ( selector ) {
    const result = document.querySelectorAll( selector )
    const length = result.length
    for ( let i = 0; i < length; i++ ) {
      this[ i ] = result[ i ]
    }
    this.length = length
    this.selector = selector

  }
  // 获取单个DOM元素
  get( index ) {
    return this[ index ]

  }
  // 便利DOM
  each( fn ) {
    for ( let i = 0; i < this.length; i++ ) {
      const elem = this[ i ]
      fn( elem )
    }
  }
  // 事件监听
  on( type, fn ) {
    return this.each( elem => {
      elem.addEventListener( type, fn, false )
    } )
  }
}