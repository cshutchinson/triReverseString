function reverseString1(stringToReverse){
  return stringToReverse.split('').reverse().join('');
}

function reverseString2(stringToReverse){
  var reversedString = '';
  for (var x=0; x<=stringToReverse.length; x++){
    reversedString += stringToReverse.charAt(stringToReverse.length-x);
  }
  return reversedString;
}

function reverseString3(stringToReverse){
  var stringArray = stringToReverse.split('');
  var newStringArray = [];
  stringArray.forEach(function(elem,index,array){
    newStringArray.push(array[array.length-1-index]);
  });
  return newStringArray.join('');
}

console.log(reverseString1('Chris'));
console.log(reverseString2('Chris'));
console.log(reverseString3('Chris'));
