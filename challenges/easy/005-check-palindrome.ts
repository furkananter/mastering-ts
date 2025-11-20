/**
 * CHALLENGE: Check Palindrome
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - String manipulation
 * - Two-pointer technique
 * - Boolean return values
 *
 * Problem:
 * Write a function that checks if a given string is a palindrome.
 * A palindrome reads the same forwards and backwards.
 * Ignore case sensitivity.
 *
 * Requirements:
 * - Return true if string is a palindrome
 * - Case insensitive ("Racecar" should return true)
 * - Empty string should return true
 *
 * Example:
 * isPalindrome("racecar");      // true
 * isPalindrome("hello");        // false
 * isPalindrome("A");            // true
 * isPalindrome("");             // true
 * isPalindrome("Racecar");      // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  // Test 1: Valid palindrome
  console.assert(isPalindrome("racecar") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed: Valid palindrome");

  // Test 2: Not a palindrome
  console.assert(isPalindrome("hello") === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed: Not a palindrome");

  // Test 3: Single character
  console.assert(isPalindrome("A") === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed: Single character");

  // Test 4: Empty string
  console.assert(isPalindrome("") === true, "❌ Test 4 failed");
  console.log("✅ Test 4 passed: Empty string");

  // Test 5: Case insensitive
  console.assert(isPalindrome("Racecar") === true, "❌ Test 5 failed");
  console.log("✅ Test 5 passed: Case insensitive");

  // Test 6: Even length palindrome
  console.assert(isPalindrome("noon") === true, "❌ Test 6 failed");
  console.log("✅ Test 6 passed: Even length");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
