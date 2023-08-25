function descendingOrder(n){
	return +[...n.toString()].sort((a,b)=>a-b).reverse().join('');
 }

