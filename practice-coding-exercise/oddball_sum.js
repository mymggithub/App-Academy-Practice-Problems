// Write a function oddball_sum(numbers), 
// which takes in an array of integers and returns the sum of all the odd elements.

function oddball_sum(arg_arr) {
	sum = 0;
	for (var i = 0; i < arg_arr.length; i++) {
		if (arg_arr[i] % 2 == 1){
			sum+=arg_arr[i];
		}
	}
	return sum;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //oddball_sum")
console.log("===============================================")
    console.log(
      'oddball_sum([1,2,3,4,5]) == 9: ' +
      (oddball_sum([1,2,3,4,5]) == 9)
    )
    console.log(
      'oddball_sum([0,6,4,4]) == 0: ' +
      (oddball_sum([0,6,4,4]) == 0)
    )
    console.log(
      'oddball_sum([1,2,1]) == 2: ' +
      (oddball_sum([1,2,1]) == 2)
    )
console.log("===============================================")