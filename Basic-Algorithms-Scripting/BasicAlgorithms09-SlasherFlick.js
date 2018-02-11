function slasher(arr, howMany) {
  // My original solution:
  
  // Figure out how long final array will be
  const keepThis = arr.length - howMany;
  // If there are no items left to slash, return empty array
  if (keepThis < 0){return []}
  // Else, return array of the last items according to keepThis
  else{return arr.slice(-keepThis)};
  
  
//     while (howMany > 0){
//     howMany--;
//     arr.shift();
//   }
//   return arr;
  
  //Other solutions taken from forum (for study):
  
//     // remove the head
//   arr.splice(0, howMany);
//   // return the remaining or the tail
//   return arr;
  
//     return arr.slice(howMany);

}

// slasher([1, 2, 3], 2);


slasher([1, 2, 3], 8);