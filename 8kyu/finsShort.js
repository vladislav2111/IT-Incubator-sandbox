function findShort(s){
	let min = s.split(' ')[0].length;
	s.split(' ').forEach(function(i){
		
	  if (i.length < min) min=i.length
	} )
	return min;
 }

