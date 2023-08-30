function correct(string)
{
	return string.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I')
}

console.log(correct("L0ND0N"));