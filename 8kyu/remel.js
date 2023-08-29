function removeEveryOther(arr){
	let newArr = [...arr];
	newArr.splice(1,1);
	return newArr;
 }

 console.log(removeEveryOther());