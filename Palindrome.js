// Write a function that takes a string and returns true if it is a
// palindrome. A palindrome is a string that is the same whether written
// backward or forward. Assume that there are no spaces; only lowercase
// letters will be given.
//
// Difficulty: easy.

function is_palindrome(string) {
	for (var i = 0; i < string.length; i++) {
		if (string[i] != string[(string.length - 1) - i]) {
			return false;
		}
	}
	return true;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //palindrome?")
console.log("===============================================")
    console.log('is_palindrome("abc") == false: ' + (is_palindrome('abc') === false));
    console.log('is_palindrome("abcba") == true: ' + (is_palindrome('abcba') === true));
    console.log('is_palindrome("z") == true: ' + (is_palindrome('z') === true));
console.log("===============================================")
