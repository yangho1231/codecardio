//Have first letter be cap
function letterCapitalize(str) {
  var string = str.split(' ');
  for(var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1).toLowerCase();
  }
  var perfect = string.join(' ');
  return perfect;
}
letterCapitalize("hello there my name is yang");