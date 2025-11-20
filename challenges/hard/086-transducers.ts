/**
 * CHALLENGE: Transducers for Composable Transformations
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Transducers
 * - Higher-order functions
 * - Composable transformations
 * - Reducing functions
 *
 * Problem:
 * Implement transducers - composable algorithmic transformations that
 * are independent of input/output sources. More efficient than chaining.
 *
 * Requirements:
 * - map(fn) returns transducer
 * - filter(pred) returns transducer
 * - compose(...transducers)
 * - transduce(xform, reducer, init, coll)
 * - No intermediate arrays
 *
 * Example:
 * const xform = compose(
 *   map(x => x * 2),
 *   filter(x => x > 5)
 * );
 * transduce(xform, (acc, x) => acc + x, 0, [1, 2, 3, 4, 5]);  // 20
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const xform = compose(
    map(x => x * 2),
    filter(x => x > 5)
  );

  const result = transduce(xform, (acc, x) => acc + x, 0, [1, 2, 3, 4, 5]);
  console.assert(result === 20, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const xform2 = compose(
    filter(x => x % 2 === 0),
    map(x => x / 2)
  );
  const result2 = transduce(xform2, (acc, x) => acc + x, 0, [1, 2, 3, 4, 5, 6]);
  console.assert(result2 === 6, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
