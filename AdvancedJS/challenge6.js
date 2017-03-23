//Check to see if two words(x and o) has same amount
function exOh(str) {
  str = str.split('');
  var x = str.filter(function(elem) {
    return elem === 'x';
  })
  var o = str.filter(function(elem) {
    return elem === 'o';
  })
  return x.length === o.length ?  true : false
}
exOh("xooxxxxooxo")