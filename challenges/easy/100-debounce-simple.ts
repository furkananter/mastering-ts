/**
 * CHALLENGE: Simple Debounce
 *
 * Difficulty: Easy
 * Estimated Time: 7 minutes
 *
 * Topics to know:
 * - Debouncing concept
 * - setTimeout/clearTimeout
 * - Closures for state
 *
 * Problem:
 * Create a debounce function that delays invoking a function
 * until after a specified wait time has elapsed since the last call.
 *
 * Requirements:
 * - Return debounced version of function
 * - Reset timer on each call
 * - Execute only after wait milliseconds of no calls
 *
 * Example:
 * const log = debounce((msg) => console.log(msg), 100);
 * log('a');  // timer starts
 * log('b');  // timer resets
 * log('c');  // timer resets, after 100ms logs 'c'
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
  return ((...args: any[]) => {}) as T;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests for debounce...\n");

  let result = '';
  const setResult = (val: string) => { result = val; };
  const debouncedFn = debounce(setResult, 50);

  debouncedFn('first');
  debouncedFn('second');
  debouncedFn('third');

  setTimeout(() => {
    console.assert(result === 'third', "❌ Test 1 failed: should execute last call");
    console.log("✅ Test 1 passed: Debounce works correctly");
    console.log("\n🎉 All tests passed!");
  }, 100);
}

// Uncomment to run tests:
// runTests();
