function findLongestWordLength(str) {
	return Math.max(...str.split(' ').map(w=>+w.length));;
 }
 console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));