/**
 * CHALLENGE: Check Prime Number
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Loop patterns
 * - Mathematical logic
 * - Early return optimization
 *
 * Problem:
 * Write a function that checks if a number is prime.
 * A prime number is only divisible by 1 and itself.
 * Numbers less than 2 are not prime.
 *
 * Requirements:
 * - Return true if number is prime
 * - Numbers < 2 return false
 * - Optimize: only check up to sqrt(n)
 *
 * Example:
 * isPrime(2);     // true
 * isPrime(17);    // true
 * isPrime(4);     // false
 * isPrime(1);     // false
 * isPrime(13);    // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isPrime(2) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isPrime(17) === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isPrime(4) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isPrime(1) === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(isPrime(13) === true, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.assert(isPrime(100) === false, "❌ Test 6 failed");
  console.log("✅ Test 6 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
