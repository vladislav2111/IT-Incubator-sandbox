function sumArray(array) {
if(!array || array.length <=1) return 0;
  let max = array[0],
      min = array[0];
  array.forEach(i => {
    if (i < min) min = i;
    if (i > max) max = i;
  });
  return array.reduce((sum, item) => sum + item, 0) - max - min;
}