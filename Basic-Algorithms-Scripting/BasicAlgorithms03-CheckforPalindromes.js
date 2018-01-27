function palindrome(str) {
//   // My original solution
  str = str.toLowerCase().replace(/[^0-9a-z]/gi,'');
  
  console.log(str);
  
  if (str === str.split('').reverse().join('')){
     return true;
  }
  return false;

  // other solutions -->
  
//   str = str.replace(/[\W_]/g, '').toLowerCase();
//   return str === str.split('').reverse().join('');
  
  
//   str = str.replace(/[^a-zA-Z0-9]/g,'');
//   console.log(str);
//   for (var i = 0, len = str.length - 1; i < len/2; i++){
//     while (str[i].toLowerCase() !== str[len - i].toLowerCase()){
//       return false;
//     }
//   }
//   return true;
  
  
  
//   let front = 0;
//   let back = str.length - 1;
  
//   while (back > front){
//     while (str[front].match(/[\W_]/)){
//       front++;
// //       continue;
//     }
  
//     while (str[back].match(/[\W_]/)){
//       back--;
// //       continue;
//     }
  
//     if (str[front].toLowerCase() !== str[back].toLowerCase()){
//       return false;
//     }
//     front++;
//     back--;
//   }
//   return true;
}



palindrome("Test");