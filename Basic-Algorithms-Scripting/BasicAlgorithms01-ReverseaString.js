
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// const reverseString = (str) => str.split('').reverse().join('');

function reverseString (str) {
  rev = [];

  for (i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}


reverseString("hello");