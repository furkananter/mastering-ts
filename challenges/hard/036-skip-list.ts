/**
 * CHALLENGE: Skip List Implementation
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Skip list data structure
 * - Probabilistic data structures
 * - Multiple levels
 * - Random level generation
 *
 * Problem:
 * Implement skip list with multiple levels for fast search.
 * Use randomization to determine node levels (coin flip).
 *
 * Requirements:
 * - insert(key) with random level
 * - search(key) returns boolean
 * - delete(key)
 * - Expected O(log n) operations
 *
 * Example:
 * const skip = new SkipList();
 * skip.insert(1); skip.insert(2); skip.insert(3);
 * skip.search(2);  // true
 * skip.delete(2);
 * skip.search(2);  // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const skip = new SkipList();
  skip.insert(1);
  skip.insert(2);
  skip.insert(3);

  console.assert(skip.search(2) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  skip.delete(2);
  console.assert(skip.search(2) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
