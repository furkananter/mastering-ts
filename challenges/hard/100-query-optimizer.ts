/**
 * CHALLENGE: SQL Query Optimizer (Relational Algebra)
 *
 * Difficulty: Hard
 * Estimated Time: 50 minutes
 *
 * Topics to know:
 * - Query optimization
 * - Relational algebra
 * - Query plans
 * - Cost-based optimization
 *
 * Problem:
 * Build simple query optimizer for relational algebra. Parse queries,
 * generate logical plans, optimize (push down selections, reorder joins).
 *
 * Requirements:
 * - Parse SQL subset (SELECT, FROM, WHERE, JOIN)
 * - Build logical query plan (relational algebra)
 * - Apply optimization rules
 * - Cost estimation (simple heuristics)
 * - Return optimized plan
 *
 * Example:
 * const query = "SELECT * FROM users WHERE age > 18";
 * const plan = optimize(query);
 * // Pushes selection down, estimates cost
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const query1 = "SELECT * FROM users WHERE age > 18";
  const plan1 = optimize(query1);

  console.assert(plan1 !== null && plan1.type === 'SELECT', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const query2 = "SELECT * FROM users JOIN orders ON users.id = orders.user_id";
  const plan2 = optimize(query2);
  console.assert(plan2 !== null && plan2.type === 'JOIN', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
