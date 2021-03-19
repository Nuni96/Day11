function multiplyArrayFunction(myArray) {
  var arr = [...myArray];
  var sum = 0;
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
      product *= arr[i][j];
    }
  }
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push(product, sum);
  return arr;
}

console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(
  multiplyArrayFunction([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9],
  ])
);

module.exports = multiplyArrayFunction;
