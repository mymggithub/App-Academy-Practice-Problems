// Write a function disemvowel(string), which takes in a string, 
// and returns that string with all the vowels removed. Treat “y” as a consonant.

function disemvowel(string) {
	result = "";
	for (var i = 0; i < string.length; i++) {
		char = string[i];
		if ((char != "a") && (char != "e") && (char != "i") && (char != "o") && (char != "u")) {
			result+=char;
		}
	}
	return result;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //disemvowel")
console.log("===============================================")
    console.log(
      'disemvowel("foobar") == "fbr": ' +
      (disemvowel("foobar") == "fbr")
    )
    console.log(
      'disemvowel("ruby") == "rby": ' +
      (disemvowel("ruby") == "rby")
    )
    console.log(
      'disemvowel("aeiou") == "": ' +
      (disemvowel("aeiou") == "")
    )
console.log("===============================================")