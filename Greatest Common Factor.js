// Write a function that takes in two numbers. Return the greatest
// integer that evenly divides both numbers. You may wish to use the
// `%` modulo operation.
//
// Difficulty: medium.

function greatest_common_factor(number1, number2) {
  i = null
  if (number1 <= number2) {
    i = number1;
  } else {
    i = number2;
  }
  while (true){
    if ((number1 % i === 0) && (number2 % i === 0)) {
      return i;
    }
    i--;
  }
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //greatest_commmon_factor")
console.log("===============================================")
    console.log(
      'greatest_common_factor(3, 9) == 3: ' +
      (greatest_common_factor(3, 9) == 3)
    )
    console.log(
      'greatest_common_factor(16, 24) == 8: ' +
      (greatest_common_factor(16, 24) == 8)
    )
    console.log(
      'greatest_common_factor(3, 5) == 1: ' +
      (greatest_common_factor(3, 5) == 1)
    )
console.log("===============================================")
