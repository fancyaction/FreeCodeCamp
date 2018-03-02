function bouncer(arr) {
    // My original solution:  
    
    // If a not a boolean, remove from array. 
    return arr.filter((val) => {
      return Boolean(val);
    });
    
    
  //     return arr.filter((x) => x);
    
  //   Other solutions taken from forum (for study):
    
  //     return arr.filter(Boolean);
  //     var a = [];
  //   arr.forEach(function(el){
  //   if(el){
  //     a.push(el);}});
  //  return a;
    
  }
  
  bouncer([7, "ate", '', false, 9]);