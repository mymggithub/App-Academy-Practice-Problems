// Write a function that takes in a string and returns the number of
// letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of
// letters that repeat, not the number of times they repeat in the
// string.
//
// Difficulty: hard.

function num_repeats(string) {
	counts = [];

	for (var srt_i = 0; srt_i < string.length; srt_i++) {
		letter = string[srt_i];
		for (var c_i = 0; c_i < counts.length; c_i++) {
			if (counts[c_i][0] == letter) {
				counts[c_i][1] += 1;
				break;
			}
		}

		if (c_i == counts.length) {
			counts.push([letter, 1]);
		}
	}

	num_repeats_result = 0;
	for (var c_i = 0; c_i < counts.length; c_i++) {
		if (counts[c_i][1] > 1) {
			num_repeats_result++;
		}
	}
	return num_repeats_result;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
console.log("\nTests for //num_repeats")
console.log("===============================================")
    console.log('num_repeats("abdbc") == 1: ' + (num_repeats('abdbc') == 1))
    // one character is repeated
    console.log('num_repeats("aaa") == 1: ' + (num_repeats('aaa') == 1))
    console.log('num_repeats("abab") == 2: ' + (num_repeats('abab') == 2))
    console.log('num_repeats("cadac") == 2: ' + (num_repeats('cadac') == 2))
    console.log('num_repeats("abcde") == 0: ' + (num_repeats('abcde') == 0))
console.log("===============================================")
