function factorialize(num) {
    //   if (num == 0) {
    //     return 1;
    //   }
      
    //   for (i = num - 1; i > 1; i--) {
    //     num *= i;
    //   }
     
    //   return num;
      
    //   for (i = 1; num >= 1; num--){
    //     i = num * i;
    //   }
      
    //   return i;
      
    //   if (num === 0) { return 1; }
    //   return num * factorialize(num-1);
      
      return num===0 ? 1 : num * factorialize(num-1);
    }
    
    factorialize(5);
    