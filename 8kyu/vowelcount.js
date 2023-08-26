function getCount(str) {
	let res = 0;
	[...str].forEach(i => {
		if (i == 'a' || i == "o" || i == "e" || i == "i" || i == "u"){
			res++;
		}
	})
	return res;
 }