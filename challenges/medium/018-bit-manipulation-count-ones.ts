/**
 * CHALLENGE: Count Set Bits (Hamming Weight)
 *
 * Difficulty: Medium
 * Estimated Time: 8 minutes
 *
 * Topics to know:
 * - Bit manipulation
 * - Bitwise AND (&)
 * - Right shift (>>)
 * - Binary representation
 *
 * Problem:
 * Count the number of 1 bits (set bits) in the binary representation
 * of a positive integer. Also known as Hamming weight.
 *
 * Requirements:
 * - Use bit manipulation
 * - Count 1s in binary
 * - Works for any positive integer
 * - Efficient solution
 *
 * Example:
 * countOnes(5);     // 2 (binary: 101)
 * countOnes(7);     // 3 (binary: 111)
 * countOnes(8);     // 1 (binary: 1000)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function countOnes(n: number): number {
  // TODO: Implement count ones using bit manipulation
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(countOnes(5) === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(countOnes(7) === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(countOnes(8) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(countOnes(15) === 4, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
