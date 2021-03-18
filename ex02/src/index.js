var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];

  for (var i = 0; i < 5; i++) {
    var temp = 0;
    for (var j = 0; j < 4; j++) {
      temp += newTemps[i][j];
    }
    temp = temp / 4;
    averageDayTemp.push(temp);
  }
  return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
