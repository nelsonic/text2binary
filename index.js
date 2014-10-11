function text2binary (str) {
  var arr = word.split('');
  return binaryArr = arr.map(function(char){
    var number = char.charCodeAt().toString(2);
    return '00000000'.slice(String(number).length) + number; // Leading Zeros
  })
}
