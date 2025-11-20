/**
 * CHALLENGE: Count Occurrences
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Array iteration
 * - Counter variable
 * - Equality comparison
 *
 * Problem:
 * Write a function that counts how many times a specific value
 * appears in an array.
 *
 * Requirements:
 * - Count exact matches only
 * - Return 0 if value not found
 * - Handle any data type
 *
 * Example:
 * countOccurrences([1, 2, 3, 2, 4, 2], 2);   // 3
 * countOccurrences(['a', 'b', 'a'], 'a');    // 2
 * countOccurrences([1, 2, 3], 5);            // 0
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(countOccurrences([1, 2, 3, 2, 4, 2], 2) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(countOccurrences(['a', 'b', 'a'], 'a') === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(countOccurrences([1, 2, 3], 5) === 0, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(countOccurrences([], 1) === 0, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
