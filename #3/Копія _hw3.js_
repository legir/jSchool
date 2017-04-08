function map (arr, m) {
  let result = [];
  for (let i = 0; i<arr.length; i++) {
    result[i] = m(arr[i], i);
  }
  return result
}

let input = [1, 2, 3, 4, 5, 6];

let output = map(input, function (item, index){
    return item * 3;
})

console.log(output)

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
}  

let input = [ , 1, , 2, 3, 4, 5, undefined];

let output = reduce(input, function (prev, current){
    return prev*current;
});

console.log(output);

//____________________

function every (arr, f) {
 for (let i = 0; i<arr.length; i++) {
    if (!f(arr[i])) {
      return false;
    } else if (f(arr[i]) && i == arr.length-1) {
      return true;
    }
  }
}

let input = [4, 2, 6, 4, 12];

let output = every(input, function (item){
    return (item%2 === 0);
});

console.log(output);

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

let input = [4, 2, 5, 12, 3];

let output = filter (input, function (item){
    return (item%2 != 0);
});

console.log(output);

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

console.log(sumMultiples(3, 5, 1000))
