/**
 * CHALLENGE: Simple Type Checker for Lambda Calculus
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Type systems
 * - Type inference
 * - Lambda calculus
 * - Hindley-Milner basics
 *
 * Problem:
 * Implement type checker for simply-typed lambda calculus.
 * Support function types (A → B), base types, and type inference.
 *
 * Requirements:
 * - AST: Var, Abs (λx.e), App (e1 e2)
 * - Type inference with unification
 * - Type environment for variables
 * - Return inferred type or error
 *
 * Example:
 * // λx.x (identity function)
 * const ast = {type: 'Abs', param: 'x', body: {type: 'Var', name: 'x'}};
 * typeCheck(ast);  // a → a (polymorphic)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  // λx.x
  const identity = {type: 'Abs', param: 'x', body: {type: 'Var', name: 'x'}};
  const type1 = typeCheck(identity);
  console.assert(type1 !== null, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  // (λx.x) 5
  const app = {type: 'App', fn: identity, arg: {type: 'Const', value: 5, constType: 'Int'}};
  const type2 = typeCheck(app);
  console.assert(type2 === 'Int', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
