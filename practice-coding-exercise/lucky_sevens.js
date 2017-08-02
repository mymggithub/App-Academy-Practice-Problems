// Write a function lucky_sevens(numbers), 
// which takes in an array of integers and returns true if any three consecutive elements sum to 7.


function lucky_sevens(num_arr) {
	for (var i = 1; i < num_arr.length-1; i++) {
		if ((num_arr[i-1] + num_arr[i] + num_arr[i+1]) == 7){
			return true;
		}
	}
	return false;
}

console.log("\nTests for //lucky_sevens")
console.log("===============================================")
    console.log(
      'lucky_sevens([2,1,5,1,0]) == true: ' +
      (lucky_sevens([2,1,5,1,0]) == true)
    )
    console.log(
      'lucky_sevens([0,-2,1,8]) == true: ' +
      (lucky_sevens([0,-2,1,8]) == true)
    )
    console.log(
      'lucky_sevens([7,7,7,7]) == false: ' +
      (lucky_sevens([7,7,7,7]) == false)
    )
    console.log(
      'lucky_sevens([3,4,3,4]) == false: ' +
      (lucky_sevens([3,4,3,4]) == false)
    )
    console.log(
      'lucky_sevens([3,4]) == false: ' +
      (lucky_sevens([3,4]) == false)
    )
    console.log(
      'lucky_sevens([3,2,2]) == true: ' +
      (lucky_sevens([3,2,2]) == true)
    )
console.log("===============================================")