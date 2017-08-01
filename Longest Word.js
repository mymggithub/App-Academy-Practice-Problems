// Write a method that takes in a string. Return the longest word in
// the string. You may assume that the string contains only letters and
// spaces.
//
// You may use the String `split` method to aid you in your quest.
//
// Difficulty: easy.

function longest_word(sentence) {
  words = sentence.split(" ");

  longest_word_result = null;
  for (var word_i = 0; word_i <= words.length - 1; word_i++) {
    current_word = words[word_i];
    if (longest_word_result == null) {
      longest_word_result = current_word
    } else if (longest_word_result.length < current_word.length) {
      longest_word_result = current_word
    }
  }
  return longest_word_result;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //longest_word")
console.log("===============================================")
    console.log(
      'longest_word("short longest") == "longest": ' +
      (longest_word('short longest') == 'longest')
    )
    console.log(
      'longest_word("one") == "one": ' +
      (longest_word('one') == 'one')
    )
    console.log(
      'longest_word("abc function abcde") == "function": ' +
      (longest_word('abc function abcde') == 'function')
    )
console.log("===============================================")
