/**
 * CHALLENGE: Find Missing Number
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Math formula (sum = n*(n+1)/2)
 * - Array reduce
 * - Arithmetic
 *
 * Problem:
 * Given an array containing n distinct numbers from 0 to n,
 * find the one number that is missing from the array.
 *
 * Requirements:
 * - Array has numbers 0 to n with one missing
 * - Return the missing number
 * - Use math formula for O(n) solution
 *
 * Example:
 * findMissingNumber([0, 1, 3]);         // 2
 * findMissingNumber([0, 1, 2, 4, 5]);   // 3
 * findMissingNumber([1]);               // 0
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(findMissingNumber([0, 1, 3]) === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(findMissingNumber([0, 1, 2, 4, 5]) === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(findMissingNumber([1]) === 0, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
