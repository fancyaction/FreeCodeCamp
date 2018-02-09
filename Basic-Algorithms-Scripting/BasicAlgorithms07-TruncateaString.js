function truncateString(str, num) {
//My original solution: 
  
//Check if input is longer than 3 characters and add '...' length
  if (num >= 3 && str.length > num){
    return str.slice(0, num - 3).concat('...');
  //If 3 or less characters, disregard '...' length
  } else if (num <= 3) {
    return str.slice(0, num).concat('...');
  //If equal or otherwise, return str
  } else {return str;}
  
  
  
//Other solutions from the forum (for study):
//     if (str.length > num)
//     return str.slice(0, num > 3 ? num-3 : num) + '...';
//   return str;
  
//     var substring="";
//   if(num<=3)
//     {
//     substring=str.substr(0,num);
//     }
//   else{ 
//   substring=str.substr(0,num-3);
//   }
//   if(num>=str.length)
//     {
//       return str;
//     }
//   return substring.concat("...");
  
//     if(num>3){
//   if(str.length > num){
//     str = str.slice(0,num-3);
//     str= str.concat("...");
//   }
//   }
//   else{
//     str = str.slice(0,num);
//     str = str.concat("...");
//   }
//   return str;
  
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);