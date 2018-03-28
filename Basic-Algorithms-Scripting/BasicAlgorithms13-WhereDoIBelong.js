
function getIndexToIns(arr, num) {
    // My original solution: 
    
    // Add num to arr
    arr.push(num);
    // Sort array ascending
    arr.sort((a, b) => a - b);
    // Return placement of num
    return arr.indexOf(num);
    
    // Other solutions taken from forum (for study):
    
  //     arr.sort(function(a, b) {
  //     return a - b;
  //   });
  
  //   for (var a = 0; a < arr.length; a++) {
  //     if (arr[a] >= num)
  //       return a;
  //   }
  
  //   return arr.length;
    
  //     arr.sort(function(a, b) {
  //   return a - b;
  //   });
  
  //   var i = 0;
  //   while (num > arr[i]) {
  //   i++;
  //   }
  
  //   return i;
    
      // sort and find right index
  //   var index = arr.sort((curr, next) => curr > next)
  //     .findIndex((currNum)=> num <= currNum);
  //   // Returns proper answer
  //   return index === -1 ? arr.length : index;
    
  //     function up(curr, prev) {
  //     return curr - prev;
  //   }
  //   function greater(number) {
  //     return number > num;
  //   }
  //   if (num > arr.sort(up).slice(arr.length-1)) {
  //     return arr.sort(up).push(num) - 1;
  //   } else {
  //     return arr.includes(num) ? arr.sort(up).indexOf(num) : arr.sort(up).findIndex(greater);
  //   }
  }
  
  getIndexToIns([40, 60], 50);