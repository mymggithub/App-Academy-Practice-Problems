// Write a function that takes in a string of lowercase letters (no
// uppercase letters, no repeats). Consider the *substrings* of the
// string: consecutive sequences of letters contained inside the string.
// Find the longest such string of letters that is a palindrome.
//
// Note that the entire string may itself be a palindrome.
//
// Difficulty: hard.

function is_palindrome(string) {
  var i = 0;
  while (i < string.length) {
    if (string[i] != string[(string.length - 1) - i]) {
      return false;
    }
    i += 1;
  }
  return true;
}

function longest_palindrome(string) {
  likely_palindrome = null;
  for (var i = 0; i < string.length; i++) {
    for (var len = 1; i+len  <= string.length; len++) {
      substr = string.slice(i, i+len);
      if ( is_palindrome(substr) && (likely_palindrome == null || substr.length > likely_palindrome.length) ) {
        likely_palindrome = substr;
      }
    }
  }
  return likely_palindrome;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //longest_palindrome")
console.log("===============================================")
    console.log(
      'longest_palindrome("abcbd") == "bcb": ' +
      (longest_palindrome('abcbd') == 'bcb')
    )
    console.log(
      'longest_palindrome("abba") == "abba": ' +
      (longest_palindrome('abba') == 'abba')
    )
    console.log(
      'longest_palindrome("abcbdeffe") == "effe": ' +
      (longest_palindrome('abcbdeffe') == 'effe')
    )
console.log("===============================================")
