// Write a function that takes in an integer `num` and returns the sum of
// all integers between zero and num, up to and including `num`.
//
// Difficulty: easy.

function sum_nums(num) {
	result = 0;
	for (var i = 0; i <= num; i++) {
		result += i;
	}
	return result;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //sum_nums")
console.log("===============================================")
    console.log('sum_nums(1) == 1: ' + (sum_nums(1) == 1))
    console.log('sum_nums(2) == 3: ' + (sum_nums(2) == 3))
    console.log('sum_nums(3) == 6: ' + (sum_nums(3) == 6))
    console.log('sum_nums(4) == 10: ' + (sum_nums(4) == 10))
    console.log('sum_nums(5) == 15: ' + (sum_nums(5) == 15))
console.log("===============================================")
