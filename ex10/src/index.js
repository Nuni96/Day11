function mySplice(arr1, arr2, n) {
  var temp1 = [...arr1],
    temp2 = [...arr2];
  for (var i = 0; i < temp1.length; i++) {
    temp2.splice(n, 0, temp1[i]);
  }
  return temp2;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Phillips"], ["Samsung", "AOX", "Sony"], 2));

module.exports = mySplice;
