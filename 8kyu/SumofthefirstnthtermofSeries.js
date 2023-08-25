"use strict"



function SeriesSum(n)
{
	let result = 0;
  let increment = 1;
  for (let i=0; i<n; i++) {
    result += 1/increment;
    increment += 3;
  }
  return result.toFixed(2).toString();
}

console.log(SeriesSum(5));