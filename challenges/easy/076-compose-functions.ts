/**
 * CHALLENGE: Compose Two Functions
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Function composition
 * - Higher-order functions
 * - Right-to-left execution
 *
 * Problem:
 * Write a compose function that takes two functions and returns
 * a new function that applies them right-to-left.
 * compose(f, g)(x) should equal f(g(x))
 *
 * Requirements:
 * - Execute second function first
 * - Pass result to first function
 * - Return composed function
 *
 * Example:
 * const double = (x) => x * 2;
 * const addOne = (x) => x + 1;
 * const doubleThenAddOne = compose(addOne, double);
 * doubleThenAddOne(3);    // 7  (3 * 2 = 6, 6 + 1 = 7)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const double = (x: number) => x * 2;
  const addOne = (x: number) => x + 1;

  const doubleThenAddOne = compose(addOne, double);
  console.assert(doubleThenAddOne(3) === 7, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const square = (x: number) => x * x;
  const subtract5 = (x: number) => x - 5;
  const squareThenSubtract = compose(subtract5, square);
  console.assert(squareThenSubtract(4) === 11, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
