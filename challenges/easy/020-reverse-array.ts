/**
 * CHALLENGE: Reverse Array
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Array methods
 * - Creating new arrays
 * - Immutability
 *
 * Problem:
 * Write a function that reverses an array without modifying the original.
 * Return a new reversed array.
 *
 * Requirements:
 * - Return new array (don't modify original)
 * - Elements in reverse order
 * - Handle empty arrays
 *
 * Example:
 * reverseArray([1, 2, 3, 4]);    // [4, 3, 2, 1]
 * reverseArray(['a', 'b']);      // ['b', 'a']
 * reverseArray([]);              // []
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const original = [1, 2, 3, 4];
  const result1 = reverseArray(original);
  console.assert(JSON.stringify(result1) === JSON.stringify([4, 3, 2, 1]), "❌ Test 1 failed");
  console.assert(JSON.stringify(original) === JSON.stringify([1, 2, 3, 4]), "❌ Test 1 failed: modified original");
  console.log("✅ Test 1 passed");

  const result2 = reverseArray(['a', 'b']);
  console.assert(JSON.stringify(result2) === JSON.stringify(['b', 'a']), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = reverseArray([]);
  console.assert(JSON.stringify(result3) === JSON.stringify([]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
