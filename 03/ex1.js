// Write a function min that takes two arguments and returns their minimum.

// My solution:
function min (a, b) {
    if (a < b)
      return b;
    else
      return b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Solution from the book:
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
