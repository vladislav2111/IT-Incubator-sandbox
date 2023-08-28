function confirmEnding(str, target) {
	let reg = new RegExp(`^.*${target}$`);
	return reg.test(str);
 }
 
console.log( confirmEnding("Bastian", "n"));