// Write a function that takes a string in and returns true if the letter
// "z" appears within three letters **after** an "a". You may assume
// that the string contains only lowercase letters.
//
// Difficulty: medium.

function nearby_az(string) {
	w_i1 = 0;
	while (w_i1 < string.length) {
		if (string[w_i1] != "a") {
			w_i1++;
		}

		w_i2 = w_i1 + 1;
		while ((w_i2 < string.length) && (w_i2 <= w_i1 + 3)) {
			if (string[w_i2] == "z") {
				return true;
			}
			w_i2++;
		}
		w_i1++;
	}
	return false;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //nearby_az")
console.log("===============================================")
    console.log('nearby_az("baz") === true: ' + (nearby_az('baz') === true))
    console.log('nearby_az("abz") === true: ' + (nearby_az('abz') === true))
    console.log('nearby_az("abcz") === true: ' + (nearby_az('abcz') === true))
    console.log('nearby_az("a") === false: ' + (nearby_az('a') === false))
    console.log('nearby_az("z") === false: ' + (nearby_az('z') === false))
    console.log('nearby_az("za") === false: ' + (nearby_az('za') === false))
console.log("===============================================")