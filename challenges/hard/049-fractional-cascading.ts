/**
 * CHALLENGE: Fractional Cascading for Multi-List Search
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Fractional cascading
 * - Multi-list binary search
 * - Augmented data structures
 * - Bridge pointers
 *
 * Problem:
 * Implement fractional cascading to search for element in multiple sorted lists.
 * Optimize from O(k log n) to O(k + log n) where k=number of lists.
 *
 * Requirements:
 * - Preprocess sorted lists with bridge pointers
 * - search(value) returns indices in all lists
 * - O(k + log n) query time
 * - O(kn) preprocessing
 *
 * Example:
 * const lists = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
 * const fc = new FractionalCascading(lists);
 * fc.search(5);  // [false, true, false]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const lists = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
  const fc = new FractionalCascading(lists);

  const result1 = fc.search(5);
  console.assert(result1[1] === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = fc.search(7);
  console.assert(result2[0] === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
