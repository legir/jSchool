function max_composition(arr) {
    arr.sort(compareNumeric);
    let result = arr[0]*arr[1]*arr[2];
    return result;
}

function compareNumeric(a, b) {
  return Math.abs(b)-Math.abs(a);
}

console.log(max_composition([99, 11, 42, -17, 27, -78, -16]));
