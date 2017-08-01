// Write a function that takes in an integer `offset` and a string.
// Produce a new string, where each letter is shifted by `offset`. You
// may assume that the string contains only lowercase letters and
// spaces.
//
// When shifting "z" by three letters, wrap around to the front of the
// alphabet to produce the letter "c".
//
// You'll want to use the `charCodeAt(index)` function for strings and the
// `String.fromCharCode(integer)` function.
// `charCodeAt(index)` converts a letter to an ASCII number code. 
// `String.fromCharCode(integer)` converts an ASCII number code to a letter.
//
// You may look at the ASCII printable characters chart:
//
//     http://en.wikipedia.org/wiki/ASCII//ASCII_printable_characters
//
// Notice that the letter 'a' has code 97, 'b' has code 98, etc., up to
// 'z' having code 122.
//
// You may also want to use the `%` modulo operation to handle wrapping
// of "z" to the front of the alphabet.
//
// Difficulty: hard. Because this problem relies on outside
// information, we would not give it to you on the timed challenge. :-)

function caesar_cipher(offset, string) {
	var words = string.split(" ");
	for (var i = 0; i < words.length; i++) {
		var word_arr = words[i].split("");
		for (var j = 0; j < word_arr.length; j++) {
			char_i = word_arr[j].charCodeAt() - "a".charCodeAt();
			new_char_i = (char_i + offset) % 26;
			word_arr[j] = String.fromCharCode( ("a".charCodeAt() + new_char_i) );
		}
		words[i] = word_arr.join("");
	}
	return words.join(" ");
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //caesar_cipher")
console.log("===============================================")
    console.log(
      'caesar_cipher(3, "abc") == "def": ' +
      (caesar_cipher(3, 'abc') == 'def')
    )
    console.log(
      'caesar_cipher(3, "abc xyz") == "def abc": ' +
      (caesar_cipher(3, 'abc xyz') == 'def abc')
    )
console.log("===============================================")
