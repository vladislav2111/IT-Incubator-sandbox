function accum(s) {
	let res = s.split('').map((char,i)=>((char.toUpperCase())+char.toLowerCase().repeat(i))).join('-')
 
  return res;
}

console.log(accum('abcd'));