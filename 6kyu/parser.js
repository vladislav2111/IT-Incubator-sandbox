function parse(data) {
	let num = 0;
	let res = [];
	data.split('').forEach(i => {
		if (i === 'i') {
			num++;
			return
		}
		if (i === 'd') {
			num--;
			return;
		}
		if (i === 's') {
			num *= num;
			return;
		}
		if (i === 'o'){
			res.push(num);
			return;
		}
	})
	return res;
}
console.log(parse('iiiasdo'));