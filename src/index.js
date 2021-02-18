exports.min = function min (array) {
  if (array === undefined) return 0;
  if (array.toString() === "") return 0;
  let minimal = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimal) minimal = array[i];
  }
  return minimal;
}

exports.max = function max (array) {
  if (array === undefined) return 0;
  if (array.toString() === "") return 0;
  let maximal = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximal) maximal = array[i];
  }
  return maximal;
}

exports.avg = function avg (array) {
  if (array === undefined) return 0;
  if (array.toString() === "") return 0;
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  return average / array.length;
}
