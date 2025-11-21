/**
 * CHALLENGE: van Emde Boas Tree (vEB Tree)
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - van Emde Boas tree
 * - Integer data structure
 * - Recursive structure
 * - O(log log u) operations
 *
 * Problem:
 * Implement vEB tree for integers in universe [0...u-1].
 * Support insert, delete, search, successor, predecessor in O(log log u).
 *
 * Requirements:
 * - Constructor(universeSize) creates vEB tree
 * - insert(x), delete(x), search(x)
 * - successor(x), predecessor(x)
 * - O(log log u) time complexity
 *
 * Example:
 * const veb = new VEBTree(16);  // universe [0...15]
 * veb.insert(5); veb.insert(10);
 * veb.successor(5);  // 10
 * veb.predecessor(10);  // 5
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class VanEmdeBoasTree { constructor(universeSize: number) {} insert(x: number): void {} delete(x: number): void {} successor(x: number): number | null { return null; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const veb = new VEBTree(16);
  veb.insert(5);
  veb.insert(10);
  veb.insert(3);

  console.assert(veb.search(5) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(veb.successor(5) === 10, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(veb.predecessor(10) === 5, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
