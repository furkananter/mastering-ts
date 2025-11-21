/**
 * CHALLENGE: Least Common Multiple (LCM)
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - LCM formula: LCM(a,b) = (a * b) / GCD(a,b)
 * - GCD calculation
 * - Mathematical operations
 *
 * Problem:
 * Write a function that finds the least common multiple (LCM)
 * of two positive integers.
 *
 * Requirements:
 * - Find smallest number divisible by both
 * - Use formula: LCM = (a * b) / GCD(a,b)
 * - May reuse GCD function
 *
 * Example:
 * lcm(4, 6);     // 12
 * lcm(3, 5);     // 15
 * lcm(12, 18);   // 36
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function lcm(a: number, b: number): number {
  return 0;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(lcm(4, 6) === 12, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(lcm(3, 5) === 15, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(lcm(12, 18) === 36, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
