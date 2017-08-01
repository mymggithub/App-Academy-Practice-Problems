// Write a function that will take in a number of minutes, and returns a
// string that formats the number into `hours:minutes`.
//
// Difficulty: easy.

function time_conversion(minutes) {
	hrs = 0

	while (minutes > 60) {
		hrs++;
		minutes -= 60;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}else {
		minutes = minutes;
	}
	return hrs + ":" + minutes;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //time_conversion")
console.log("===============================================")
    console.log('time_conversion(15) == "0:15": ' + (time_conversion(15) == '0:15'))
    console.log('time_conversion(150) == "2:30": ' + (time_conversion(150) == '2:30'))
    console.log('time_conversion(360) == "6:00": ' + (time_conversion(360) == '6:00'))
console.log("===============================================")
