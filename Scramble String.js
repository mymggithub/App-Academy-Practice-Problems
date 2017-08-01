// Write a function that takes in a string and an array of indices in the
// string. Produce a new string, which contains letters from the input
// string in the order specified by the indices of the array of indices.
//
// Difficulty: medium.

function scramble_string(string, positions) {
	result = "";

	for (var i = 0; i < positions.length; i++) {
		result += string[positions[i]];
	}
	return result;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //scramble_string")
console.log("===============================================")
    console.log(
      'scramble_string("abcd", [3, 1, 2, 0]) == "dbca": ' +
      (scramble_string("abcd", [3, 1, 2, 0]) == "dbca")
    )
    console.log(
      'scramble_string("markov", [5, 3, 1, 4, 2, 0]) == "vkaorm"): ' +
      (scramble_string("markov", [5, 3, 1, 4, 2, 0]) == "vkaorm")
    )
console.log("===============================================")
