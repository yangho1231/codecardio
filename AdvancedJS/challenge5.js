//Finding missing number is array
function missingNo(numArray) {
  numArray = numArray.sort();
  var missing = 0;
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] + 1 !== numArray[i+1] && numArray[i+1] !== undefined) {
      missing = numArray[i] + 1;
    }
  }
  return missing;
}
missingNo([1,2,3,5]);