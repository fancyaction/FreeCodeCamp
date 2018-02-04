function repeatStringNumTimes(str, num) {
  // My original solution:
  if(num <= 0) {
    return "";
  } else {
  return str.concat(repeatStringNumTimes(str, num - 1));
  }
  
  
  // Other solutions taken from the forum (for study):
  
//   var strArray=[];

// for(i=0;i<num;i++){strArray.push(str);}
// return strArray.join("");
  
//   var repeat="";
// for (var i = 1; i<=num ; i++){
// repeat = repeat.concat(str);
  
//  var repeatStrNum = "";

// while(num > 0) {
// repeatStrNum += str;

// num--;
// }
// return repeatStrNum;
// }
// return repeat;
}

repeatStringNumTimes("abc", 1);