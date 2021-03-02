/*
 * 剩余参数
 * */
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => previous + current);
}
console.log(sum(1, 2, 3));
