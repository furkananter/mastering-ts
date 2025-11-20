/**
 * CHALLENGE: Move Zeros to End
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Array manipulation
 * - Filter method
 * - Array concatenation
 *
 * Problem:
 * Write a function that moves all zeros in an array to the end
 * while maintaining the order of non-zero elements.
 *
 * Requirements:
 * - Move all zeros to the end
 * - Keep order of non-zero elements
 * - Return new array (don't modify original)
 *
 * Example:
 * moveZeros([1, 0, 2, 0, 3]);    // [1, 2, 3, 0, 0]
 * moveZeros([0, 0, 1]);          // [1, 0, 0]
 * moveZeros([1, 2, 3]);          // [1, 2, 3]
 * moveZeros([0, 0, 0]);          // [0, 0, 0]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = moveZeros([1, 0, 2, 0, 3]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 2, 3, 0, 0]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = moveZeros([0, 0, 1]);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 0, 0]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = moveZeros([1, 2, 3]);
  console.assert(JSON.stringify(result3) === JSON.stringify([1, 2, 3]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  const result4 = moveZeros([0, 0, 0]);
  console.assert(JSON.stringify(result4) === JSON.stringify([0, 0, 0]), "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
