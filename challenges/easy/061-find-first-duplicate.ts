/**
 * CHALLENGE: Find First Duplicate
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Set for tracking seen values
 * - Array iteration
 * - Early return
 *
 * Problem:
 * Write a function that finds the first duplicate value in an array.
 * Return the first value that appears more than once.
 * Return undefined if no duplicates exist.
 *
 * Requirements:
 * - Return first value that repeats
 * - Return undefined if no duplicates
 * - Use Set for O(n) solution
 *
 * Example:
 * findFirstDuplicate([1, 2, 3, 2, 4]);    // 2
 * findFirstDuplicate([5, 1, 5, 1]);       // 5
 * findFirstDuplicate([1, 2, 3]);          // undefined
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function findFirstDuplicate<T>(arr: T[]): T | undefined {
  return undefined;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(findFirstDuplicate([1, 2, 3, 2, 4]) === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(findFirstDuplicate([5, 1, 5, 1]) === 5, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(findFirstDuplicate([1, 2, 3]) === undefined, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
