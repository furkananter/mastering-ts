/**
 * CHALLENGE: Z Algorithm for Pattern Matching
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - String algorithms
 * - Z algorithm
 * - Linear time pattern matching
 * - Z-array construction
 *
 * Problem:
 * Implement Z algorithm to find all occurrences of pattern in text.
 * Z[i] = length of longest substring starting from i which is also a prefix.
 *
 * Requirements:
 * - Construct Z-array
 * - O(n + m) time complexity
 * - Find pattern using concatenation: pattern$text
 * - Return array of starting indices
 *
 * Example:
 * zAlgorithm("aabcaabxaaz", "aab");  // [0, 5]
 * zAlgorithm("aaaa", "aa");          // [0, 1, 2]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = zAlgorithm("aabcaabxaaz", "aab");
  console.assert(JSON.stringify(result1) === JSON.stringify([0, 5]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = zAlgorithm("aaaa", "aa");
  console.assert(JSON.stringify(result2) === JSON.stringify([0, 1, 2]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
