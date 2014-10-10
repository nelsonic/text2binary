var word = 'Your Word Here!';
var arr = word.split('');

function zeroPad(number) {
	return '00000000'.slice(String(number).length) + number;
}

var binaryArr = arr.map(function(char){
  return zeroPad( char.charCodeAt().toString(2) );
})

console.log( binaryArr.join(' ') );
