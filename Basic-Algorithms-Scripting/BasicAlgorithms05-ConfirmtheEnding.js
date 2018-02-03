function confirmEnding(str, target) {
// My original solution
  
    return str.substr(str.length - target.length) === target;
  
// Other solutions from the forum (for study):
  
// var str2 = str.concat("test");
// var split = str2.split(target);

// if (split[split.length-1]==="test") {return true;}
// else {return false;}



}

confirmEnding("Bastian", "fer");