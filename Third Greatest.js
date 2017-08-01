// Write a function that takes an array of numbers in. Your function should
// return the third greatest number in the array. You may assume that
// the array has at least three numbers in it.
//
// Difficulty: medium.

function third_greatest(nums) {
  first = null;
  second = null;
  third = null;
  for (var i = 0; i < nums.length; i++) {
    val = nums[i];
    if (first == null || val > first) {
      third = second;
      second = first;
      first = val;
    }else if (second == null || val > second) {
      third = second;
      second = val;
    }else if (third == null || val > third) {
      third = val;
    }
  }
  return third
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //third_greatest")
console.log("===============================================")
    console.log(
      'third_greatest([5, 3, 7]) == 3: ' +
      (third_greatest([5, 3, 7]) == 3)
    )
    console.log(
      'third_greatest([5, 3, 7, 4]) == 4: ' +
      (third_greatest([5, 3, 7, 4]) == 4)
    )
    console.log(
      'third_greatest([2, 3, 7, 4]) == 3: ' +
      (third_greatest([2, 3, 7, 4]) == 3)
    )
console.log("===============================================")
