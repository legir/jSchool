<<<<<<< HEAD
module.exports = './hw3.js'
=======
module.exports.map = map;
module.exports.reduce = reduce;
module.exports.every = every;
module.exports.filter = filter;
module.exports.sumMultiples = sumMultiples;
>>>>>>> 8832583b278216a08674db5d0075135b2c4c7ffd

function map (arr, m) {
  let result = [];
  for (let i = 0; i<arr.length; i++) {
    result[i] = m(arr[i], i);
  }
  return result;
};

//____________________

function reduce (arr, f) {
    let result, prev, current;
    for (let i = 0; i<=arr.length; i++) {
     if (!result && arr[i] !== undefined)  {
        prev = arr[i];
        current = arr[++i];
        result = f(prev, current);
      } else if (result && arr[i] !== undefined && i < arr.length) {
        prev = result;
        current = arr[i];
        result = f(prev, current);
      }
    }
  return result;
};  

//____________________

function every (arr, f) {
 for (let i = 0; i<arr.length; i++) {
    if (!f(arr[i])) {
      return false;
    } else if (f(arr[i]) && i == arr.length-1) {
      return true;
    }
  }
};


//____________________

function filter (arr, f) {
 let result = [];
 for (let i = 0; i<arr.length; i++) {
    if (f(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}


// Сумма чисел кратных 3 и 5

function sumMultiples (a, b, limit) {
  let result = 0;
  for (let i = 0; i<limit; i++ ) {
    if (i%a === 0 || i%b === 0) {
      result += i;
    }
  }
  return result;
}
