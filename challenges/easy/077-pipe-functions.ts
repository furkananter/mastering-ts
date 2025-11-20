/**
 * CHALLENGE: Pipe Two Functions
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Function piping
 * - Higher-order functions
 * - Left-to-right execution
 *
 * Problem:
 * Write a pipe function that takes two functions and returns
 * a new function that applies them left-to-right.
 * pipe(f, g)(x) should equal g(f(x))
 *
 * Requirements:
 * - Execute first function first
 * - Pass result to second function
 * - Return piped function
 *
 * Example:
 * const double = (x) => x * 2;
 * const addOne = (x) => x + 1;
 * const doubleAndAddOne = pipe(double, addOne);
 * doubleAndAddOne(3);    // 7  (3 * 2 = 6, 6 + 1 = 7)
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

  const doubleAndAddOne = pipe(double, addOne);
  console.assert(doubleAndAddOne(3) === 7, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const square = (x: number) => x * x;
  const subtract5 = (x: number) => x - 5;
  const squareAndSubtract = pipe(square, subtract5);
  console.assert(squareAndSubtract(4) === 11, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
