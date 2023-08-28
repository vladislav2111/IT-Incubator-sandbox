function domainName(url){
/* 	return url.match(/(?<=.+:\/\/).+(?=\.)|(?<=www\.).+(?=\..)/)[0].split('.')[0]; */
	/* return url.replace('http://','').replace('https://','').replace('www.','').split('.')[0]; */
	return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
 }

console.log(domainName('http://google.co.jp'));