//Return longest word

function longestWord(sen) { 
  var longest = 0;
  var word;
  sen = sen.split(' ');
  for(var i = 0; i < sen.length; i++) {
    if(sen[i].length > longest) {
      longest = sen[i].length;
      word = sen[i];
    }
  }
  return word;
}
longestWord("What is the longest word in the sentence");