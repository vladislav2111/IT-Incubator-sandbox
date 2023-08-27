function solution(number){
  if (number<=0) return 0;
  let arr = [];
  for (let i=3; i<number; i++) {
	if (i%3 == 0 || i%5 == 0){
		arr.push(i);
	}
  }
  return arr.reduce((a,b)=> a+b, 0)
}

console.log(solution(10));