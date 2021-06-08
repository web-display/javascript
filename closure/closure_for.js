//错误事例
for (var v = 0; v <= 5; v++) {
  setTimeout(function timer() {
    console.log(v);
  }, v * 1000);
}

//正确事例
for (var i = 10; i <= 15; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

// let 事例
for (let x = 0; x <= 6; x++) {
  setTimeout(() => console.log(x), x * 1000);
}
