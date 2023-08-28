function findOdd(A) {
	let max = Math.max(...A);
	let min = Math.min(...A);
	for( let i = min; i<=max; i++ ){
		let count = 0;
		A.forEach(num =>{
			if (num == i) {
				count ++;
			}
		})
		return count;
	}

	 return count;
  }
  console.log(findOdd([7,9,9,2,2,2,4,4,4,4,4]));