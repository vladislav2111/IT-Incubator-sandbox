function expandedForm(num) {
	let str = num+""
	let length = str.length;
	let res = "";
	let sq = length-1;
	for (let i=0; i<length;i++){
	  if(str[i]!=0){
		 res+=`${(10**sq)*+str[i]} + `;
		 sq--;
	  } else {
		sq--;
	  }
	}
	res = res.slice(0, res.length-3)
	return res ;
 }

 console.log(expandedForm(70304));