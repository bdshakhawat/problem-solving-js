// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
// starting with word1. If a string is longer than the other, append the additional letters onto the end of 
// the merged string.

// Return the merged string.
 
// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

// Solution:

// write a function called mergeAlternating that takes two string parameters: word1 and word2
function mergeAlternating(word1,word2){
// Declare a variable 'merged' and initialize it as an empty string. 
// This string will hold the result of our merged words.
let merged=" ";

//Declare another variable maxLength to store the length of the longer word among word1 and word2. 
// This is done using the 'Math.max function', which returns the larger of the two provided values.
let maxLength=Math.max(word1.length, word2.length);

//  Start a for loop that will iterate through each index of the words up to the maxLength.
  for (let i=0; i<maxLength; i++){
//  If the current index i is less than the length of word1, we append the character at 
// index i from word1 to our merged string.
   if (i < word1.length) {
    merged += word1[i];
  }
//   Similarly, if the current index i is less than the length of word2,
//  we append the character at index i from word2 to our merged string.
 if (i < word2.length) {
    merged += word2[i];
 }




  } 
}
// Test the function
let test1 = mergeAlternating("abc", "pqr");   // Expected output: "apbqcr"
let test2 = mergeAlternating("ab", "pqrs");   // Expected output: "apbqrs"
let test3 = mergeAlternating("abcd", "pq");   // Expected output: "apbqcd"

