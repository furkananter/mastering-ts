/**
 * CHALLENGE: Square Root (Integer)
 *
 * Difficulty: Medium
 * Estimated Time: 8 minutes
 *
 * Topics to know:
 * - Binary search
 * - Integer square root
 * - Mid-point calculation
 * - Overflow handling
 *
 * Problem:
 * Compute integer square root of x (floor of sqrt).
 * Use binary search. Don't use built-in sqrt.
 *
 * Requirements:
 * - Return floor(sqrt(x))
 * - Use binary search
 * - O(log n) time
 * - Handle overflow (use mid = left + (right-left)/2)
 *
 * Example:
 * mySqrt(4);    // 2
 * mySqrt(8);    // 2
 * mySqrt(16);   // 4
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(mySqrt(4) === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(mySqrt(8) === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(mySqrt(16) === 4, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
