function fib(num) {
  if (num < 2) {
    return num;
  } else {
    return fib(num - 1) + fib(num - 2);
  }
}

//   function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }
