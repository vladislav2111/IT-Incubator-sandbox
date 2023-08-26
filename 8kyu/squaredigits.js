function squareDigits(num){



	return +[...num.toString()].reduce((sum, num)=> {
		return sum + num**2;
	}, "") ;
 }

 console.log(squareDigits(9119));