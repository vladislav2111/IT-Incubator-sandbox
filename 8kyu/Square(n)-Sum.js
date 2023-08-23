function squareSum(numbers){
  return numbers.reduce((sum, number) => sum + Math.pow(number, 2), 0);
}
