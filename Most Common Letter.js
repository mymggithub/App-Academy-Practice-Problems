// Write a function that takes in a string. Your function should return the
// most common letter in the array, and a count of how many times it
// appears.
//
// Difficulty: medium.

function most_common_letter(string) {
  most_comm_letter = null;
  most_comm_letter_i = null;

  for (var i = 0; i < string.length; i++) {
  	letter = string[i];

  	count = 0;
  	for (var j = 0; j < string.length; j++) {
  		if (string[j] == letter) {
  			count++;
  		}
  	}
  	if ( (most_comm_letter == null) || (count > most_comm_letter_i) ) {
  		most_comm_letter = letter;
  		most_comm_letter_i = count;
  	}
  }
  return [most_comm_letter, most_comm_letter_i];
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //most_common_letter")
console.log("===============================================")
    console.log(
      'most_common_letter("abca") == ["a", 2]: ' +
      (most_common_letter('abca').toString() == ['a', 2]).toString()
    )
    console.log(
      'most_common_letter("abbab") == ["b", 3]: ' +
      (most_common_letter('abbab').toString() == ['b', 3].toString())
    )
console.log("===============================================")
