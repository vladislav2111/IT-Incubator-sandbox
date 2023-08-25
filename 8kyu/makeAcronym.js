function toAcronym(inp){
	return inp.split(" ").map(i=>i[0].toUpperCase()).join('')
 }

 console.log(toAcronym('hello world dear'));