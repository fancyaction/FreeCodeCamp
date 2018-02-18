function mutation(arr) {
  //My original solution: 
  let shortestWord = '';
  let longestWord = '';
  let count = 0;
  
  //Decide which array group is the shortest and longest word
 
  if(arr[0].length < arr[1].length) {
    shortestWord = arr[0].toLowerCase();
    longestWord = arr[1].toLowerCase();
  } else{
    shortestWord = arr[1].toLowerCase();
    longestWord = arr[0].toLowerCase();
  }

  //Check if each letter of shortestWord is present in longestWord
  while (shortestWord.length > count){
    if(longestWord.indexOf(shortestWord[count]) < 0){
      return false;
    }
    count++
  }
  return true;
  
  //Other solutions from forum (for study):
  
//     var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();
//   for (i=0;i<test.length;i++) {
//     if (target.indexOf(test[i]) === -1)
//       return false;
//   }
//   return true;
  
//     return arr[1].toLowerCase()
//     .split('')
//     .every(function(letter) {
//       return arr[0].toLowerCase()
//         .indexOf(letter) !== -1;
//     });
  
}

mutation(["Mary", "Army"]);