// Write a function that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.
//
// Difficulty: easy.

function count_vowels(string){
	num_vowels = 0;
	for (var i = 0; i < string.length; i++) {
		L = string[i];
		if (L == "a" || L == "e" || L == "i" || L == "o" || L == "u") {
			num_vowels++;
		}
	}
	return num_vowels;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //count_vowels")
console.log("===============================================")
    console.log('count_vowels("abcd") == 1: ' + (count_vowels('abcd') == 1))
    console.log('count_vowels("color") == 2: ' + (count_vowels('color') == 2))
    console.log('count_vowels("colour") == 3: ' + (count_vowels('colour') == 3))
    console.log('count_vowels("cecilia") == 4: ' + (count_vowels('cecilia') == 4))
console.log("===============================================")
