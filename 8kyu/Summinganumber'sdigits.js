"use strict"

function sumDigits(number) {


   return Array.from(String(Math.abs(number))).reduce((sum, num) => sum + Number(num), 0)
  
}

console.log(sumDigits(-32));