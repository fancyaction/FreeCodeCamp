function chunkArrayInGroups(arr, size) {
  // My original solution:
  const chunkArray = [];
  let end = size;
  let i = 0;
  let start = 0;
  // Push items into array groups until end of arr is reached
  
  while(end <= arr.length){
    // copy items into an array, from start to size.
    chunkArray[i] = arr.slice(start, end);
    // increase array group, start moves to previous end, and end is increased by size.
    i++
    start = end;
    end += size;
  }
  // If there are leftovers, copy them into a new array group.
    if (start < arr.length){
      chunkArray[i] = arr.slice(start, arr.length);
    }
  
  return chunkArray;
  
//   //Other solutions taken from forum (for study):
  
  
//     var temp = [];
//   var result = [];

//   for (var a = 0; a < arr.length; a++) {
//     if (a % size !== size - 1)
//       temp.push(arr[a]);
//     else {
//       temp.push(arr[a]);
//       result.push(temp);
//       temp = [];
//     }
//   }

//   if (temp.length !== 0)
//     result.push(temp);
//   return result;
  
//     var arr2 = [];
//   for (var i = 0; i < arr.length; i+=size) {
// 	arr2.push(arr.slice(i , i+size));
//   }
//   return arr2;
  
//     var newArr = [];
//   while (arr.length) {
//     newArr.push(arr.splice(0,size));
//   }
//   return newArr;

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);