//Problem:1

//  You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
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


// 

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




// Problem:2

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

// Solution:
// Write a helper function named gcd which calculates the greatest common divisor (GCD) of two numbers, 
// a and b, using the Euclidean algorithm:
function gcd(a, b) {
  // If b is zero, the function returns a .
  if (b === 0) return a;
  // Otherwise, the function calls itself recursively with b and the remainder of a divided by b.
  return gcd(b, a % b);
}


// Write  the main function to determine the largest common substring for the given strings str1 and str2.

// The condition (str1 + str2 !== str2 + str1) checks if the concatenation of str1 and str2 is different from the concatenation of str2 and str1. If they are different, it means the strings don't have the same repeating pattern. In this case, the function returns an empty string.
// The line const len = gcd(str1.length, str2.length); calculates the GCD of the lengths of str1 and str2 using the previously defined gcd function. The reasoning behind this is that the length of the common substring that divides both strings must be a divisor of the lengths of both strings.
// The line return str1.substring(0, len); returns a substring of str1 that starts at the beginning (index 0) and has a length of len. This substring is the largest common substring that divides both str1 and str2
function findLargestCommonSubstring(str1, str2) {
  // Check if both strings are the sequences of copies of a common substring
  if (str1 + str2 !== str2 + str1) return ""; 

  const len = gcd(str1.length, str2.length);
  return str1.substring(0, len);
}

// This is an example usage of the findLargestCommonSubstring function:

// Two strings, str1 and str2, are initialized.
// The result of the function is then printed to the console using console.log.

const str1 = "ABABAB";
const str2 = "ABAB";
console.log(findLargestCommonSubstring(str1, str2));  

// PS E:\problem_solving-leetcode-hackerrank\problem-solving-js> node leetcode.js
// AB
