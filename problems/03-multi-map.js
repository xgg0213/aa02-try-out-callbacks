/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

function multiMap(val, n, cb) {
  // Your code here 
  if (typeof val === 'string') {
      let res = [val];
      let cb = function (n) {
          res.push('!');
    }
    for (let i = 1; i <= n; i++) {
      cb(i);
    }
    return res.join('');
  } else if (typeof val === 'number') {
    let res = val;
    let cb = function (n) {
        res = res * 10
  }
  for (let i = 1; i <= n; i++) {
    cb(i);
  }
  return res;
  }


  // without a callback function
  // if (typeof val === 'string') {
  //   let res = [val];
  //   for (let i = 1; i <= n; i++) {
  //       res.push('!');
  //   }
  //   return res.join('');
  // }
  // else if (typeof val === 'number') {
  //   let res = 1 * val;
  //   for (let i = 1; i <= n; i++) {
  //       res = res * 10;
  //   }
  //   return res;
  // }

}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch(e) {
  return null;
}
