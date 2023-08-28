function spinWords(string){
  return string.split(' ').map(world => {
	if (world.length >=5) {
		return world.split('').reverse().join('')
	} else return world;
  }).join(' ');
}

console.log(spinWords("hey hello world"));