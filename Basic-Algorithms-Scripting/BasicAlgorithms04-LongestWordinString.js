function findLongestWord(str) {
//   My original solution
  str = str.split(' ');
  var longestWord = str[0];

  for (i = 0; i < str.length; i++){
    x = str[i];

    if (x.length > longestWord.length){
      longestWord = x;
    }
  }
  
  return longestWord.length;
  
//   str = str.split(' ');
  
//   if(str.length === 1){
//     return str[0].length;
//   }
  
//   if(str[0].length >= str[1].length){
//     str.splice(1,1);
//     return findLongestWord(str.join(' '));
//   }
  
//    if(str[0].length <= str[1].length){
// //     str.splice(0,1);
//     return findLongestWord(str.slice(1,str.length).join(' '));
//   }
  
//   return str.split(' ').reduce(function(x, y){
//     console.log (x, y);
//     return Math.max(x, y.length);
//   },0);
}

findLongestWord("The quick brown fox jumped over the lazy dog");