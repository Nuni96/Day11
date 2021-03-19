function myBouncer(arr) {
  var temp = [...arr];
  for (var i = 0; i < temp.length; i++) {
    if (!temp[i]) {
      temp.splice(i, 1);
    }
  }
  return temp;
}

console.log(myBouncer([7, "ate", "", false, 9]));
module.exports = myBouncer;
