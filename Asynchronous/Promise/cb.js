function doSth(t, cb) {
  return () => {
    if (--t === 0) {
      logSth(()=>logSth2(()=>logSth3()))
    }
  };
}

function logSth(cb) {
  console.log("i'm logSth");
  cb()
}

function logSth2(cb){
  console.log("i'm logSth2")
  cb()
}

function logSth3(){
  console.log("I'm logSth3")
}

let fn = doSth(4,logSth);
fn();
fn();
fn();
fn(); // i'm logSth
