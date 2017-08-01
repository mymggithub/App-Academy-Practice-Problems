// Write a function that returns the `n`th prime number. Recall that only
// numbers greater than 1 can be prime.
//
// Difficulty: medium.

// You may use our `is_prime` solution.
function is_prime(number) {
  if (number <= 1) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if ((number % i) === 0) {
      return false;
    }
  }
  return true;
}

function nth_prime(n) {
  prime_num = 0;
  i = 2;
  while (true) {
    if (is_prime(i)) {
      prime_num++;
      if (prime_num == n) {
        return i;
      }
    }
    i++;
  }
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //nth_prime")
console.log("===============================================")
    console.log('nth_prime(1) == 2: ' + (nth_prime(1) == 2))
    console.log('nth_prime(2) == 3: ' + (nth_prime(2) == 3))
    console.log('nth_prime(3) == 5: ' + (nth_prime(3) == 5))
    console.log('nth_prime(4) == 7: ' + (nth_prime(4) == 7))
    console.log('nth_prime(5) == 11: ' + (nth_prime(5) == 11))
console.log("===============================================")
