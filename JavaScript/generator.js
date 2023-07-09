// var x = 1;
// function* foo() {
//   x++;
//   yield;
//   console.log("x:", x);
// }

// function bar() {
//   x++;
// }
// var it = foo();
// it.next();
// console.log(x);
// bar();
// console.log(x);
// it.next();

// function *foo(x,y){
//     return x+y
// }
// var it= foo(1,2)
// var res = it.next()
// console.log(res.value)

// function *foo(x){
//     var y = x * (yield);
//     return y
// }
// var it = foo( 6 );

// it.next();

// var res = it.next(7);

// console.log(res.value)
// var res = it.next(7);
// console.log(res)

// function* foo(x) {
//   var y = x * (yield "Hello");
//   return y;
// }

// var it = foo(6);
// var res = it.next();
// console.log(res);

// res = it.next(7);
// console.log(res);

var a = 1;
var b = 2;

function* foo() {
  a++;
  yield;
  b = b * a;
  a = (yield b) + 3;
}

function* bar() {
  b--;
  yield;
  b = (yield 8) + a;
  a = a * (yield 2);
}
function step(gen) {
  var it = gen();
  var last;
  return function () {
    last = it.next(last).value;
  };
}

a = 1;
b = 2;
var s1 = step(foo);
var s2 = step(bar);

s1();
s1();
s1();

s2();
s2();
s2();
s2();
console.log("end", a, b);
