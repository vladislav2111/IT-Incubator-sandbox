function domainName(url){
	/* return url.match(/(?<=.+:\/\/).+(?=\..)|(?<=www\.).+(?=\..)/)[0].split('.')[0]; */
	return url.replace('http://','').replace('https://','').replace('www.','').split('.')[0];
 }

console.log(domainName('http://google.co.jp'));