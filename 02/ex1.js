/*
 * Write a loop that makes seven calls to console.log to output the following triangle:
 *
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 *
 */

// My solution:
var result = "";
for (var i = result.length; i < 7; i++) {
  result += "#";
  console.log(result);
}

// Solution from the book:
for (var line = "#"; line.length < 8; line += "#")
  console.log(line); 
