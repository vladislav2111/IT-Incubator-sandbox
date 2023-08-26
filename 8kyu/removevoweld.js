function disemvowel(str) {
	
	let res = [...str].filter(char=> {
		if (char !== 'a' && char !== "o" && char !== "e" && char !== "i" && char !== "u" && char !== 'A' && char !== "O" && char !== "E" && char !== "I" && char !== "U") {
			return true;
		}
	})
	return res.join('');
	
 }

 console.log(disemvowel('This website is for losers LOL!'));