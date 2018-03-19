
function destroyer(arr) {
  // My original solution:
  let i = 1;
  
  // go through each argument after arr
  while (arguments.length > i){
  //remove argument copies from arr, each time moving to next argument
    arr = arr.filter((val) => val !== arguments[i]);
    i++;
  }
  
  return arr;
  
  // Other solutions taken from forum (for study):
  
//     var args = Array.prototype.slice.call(arguments);

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < args.length; j++) {
//       if (arr[i] === args[j]) {
//         delete arr[i];
//       }
//     }
//   }
//   return arr.filter(Boolean);
  
//     var args = [...arguments].slice(1);
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
//    var args = Array.prototype.slice.call(arguments, destroyer.length); 
 
//   return arr.reduce((acc, item) => {
//          if (!args.includes(item)) { 
//             acc.push(item);
//          }  
//          return acc;
        
//  }, []);
}

destroyer(["tree", "hamburger", 53], "tree", 53);