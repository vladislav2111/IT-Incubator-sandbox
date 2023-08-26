function highAndLow(numbers){
let res = numbers.split(" ").sort((a,b)=>a-b);
return `${res[res.length-1]} ${res[0]}`
 }

 console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));