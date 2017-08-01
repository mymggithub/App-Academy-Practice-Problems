// Write a function that takes in a string of lowercase letters and
// spaces, producing a new string that capitalizes the first letter of
// each word.
//
// Difficulty: medium.

function capitalize_words(string) {
	words = string.split(" ");
	for (var i = 0; i < words.length; i++) {
		word = words[i];
		words[i] = word[0].toUpperCase() + word.slice(1);
	}
	return words.join(" ");
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //capitalize_words")
console.log("===============================================")
    console.log(
      'capitalize_words("this is a sentence") == "This Is A Sentence": ' +
      (capitalize_words("this is a sentence") == "This Is A Sentence")
    )
    console.log(
      'capitalize_words("mike bloomfield") == "Mike Bloomfield": ' +
      (capitalize_words("mike bloomfield") == "Mike Bloomfield")
    )
console.log("===============================================")
