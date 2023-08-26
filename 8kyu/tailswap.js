

function tailSwap(arr) {
	let first = arr[0].split(':');
	let second = arr[1].split(':');
	arr = [first[0] + ":" + second[1], second[0] + ":" + first[1]]

	return arr;
 }



