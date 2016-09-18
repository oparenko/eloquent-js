/*

Write a function countBs that takes a string as its only argument and returns a
number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to make
use of this new function.

*/

// My solution:
function countBs(string) {
  return countChar(string, "B")
}
function countChar(string, letter) {
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == letter)
      result++;
  }
  return result;
}

//Solution from the book:
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
