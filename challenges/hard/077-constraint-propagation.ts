/**
 * CHALLENGE: Constraint Satisfaction with AC-3
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Constraint satisfaction problems (CSP)
 * - AC-3 algorithm
 * - Arc consistency
 * - Domain reduction
 *
 * Problem:
 * Implement AC-3 (Arc Consistency 3) algorithm for CSP.
 * Reduce variable domains by enforcing arc consistency.
 *
 * Requirements:
 * - Variables with domains
 * - Binary constraints
 * - Queue-based arc processing
 * - Domain reduction
 * - Return consistent domains or null
 *
 * Example:
 * const domains = {x: [1,2,3], y: [1,2], z: [2,3]};
 * const constraints = [['x','y','<'], ['y','z','<']];
 * ac3(domains, constraints);  // Reduced domains
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const domains = {x: [1,2,3], y: [1,2], z: [2,3]};
  const constraints = [['x','y','<'], ['y','z','<']];

  const result = ac3(domains, constraints);
  console.assert(result !== null, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const domains2 = {a: [1], b: [2], c: [1]};
  const constraints2 = [['a','b','='], ['b','c','=']];
  const result2 = ac3(domains2, constraints2);
  console.assert(result2 === null, "❌ Test 2 failed (should be inconsistent)");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
