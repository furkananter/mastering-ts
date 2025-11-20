/**
 * CHALLENGE: Product of Array Except Self
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Array algorithms
 * - Prefix/suffix products
 * - O(n) solution without division
 * - Space optimization
 *
 * Problem:
 * Return an array where each element is the product of all elements
 * except itself. Don't use division. O(n) time.
 *
 * Requirements:
 * - O(n) time complexity
 * - Can't use division
 * - Use prefix and suffix products
 * - Handle zeros
 *
 * Example:
 * productExceptSelf([1,2,3,4]);     // [24,12,8,6]
 * productExceptSelf([2,3,4,5]);     // [60,40,30,24]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = productExceptSelf([1,2,3,4]);
  console.assert(JSON.stringify(result1) === JSON.stringify([24,12,8,6]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = productExceptSelf([2,3,4,5]);
  console.assert(JSON.stringify(result2) === JSON.stringify([60,40,30,24]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = productExceptSelf([1,0,3]);
  console.assert(JSON.stringify(result3) === JSON.stringify([0,3,0]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
