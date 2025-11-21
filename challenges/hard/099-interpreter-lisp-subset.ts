/**
 * CHALLENGE: Lisp Interpreter (Subset)
 *
 * Difficulty: Hard
 * Estimated Time: 50 minutes
 *
 * Topics to know:
 * - Interpreter design
 * - S-expressions
 * - Environment/scope
 * - Eval/apply
 *
 * Problem:
 * Implement interpreter for Lisp subset. Support: numbers, +, -, *, /,
 * define, lambda, if. Parse S-expressions and evaluate.
 *
 * Requirements:
 * - Parse S-expressions to AST
 * - Environment for variable bindings
 * - eval(expr, env) evaluates expression
 * - Support: arithmetic, define, lambda, if
 * - Handle closures
 *
 * Example:
 * const lisp = new LispInterpreter();
 * lisp.eval("(+ 1 2)");  // 3
 * lisp.eval("(define x 10)");
 * lisp.eval("(+ x 5)");  // 15
 * lisp.eval("((lambda (x) (* x x)) 5)");  // 25
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const lisp = new LispInterpreter();

  console.assert(lisp.eval("(+ 1 2)") === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  lisp.eval("(define x 10)");
  console.assert(lisp.eval("(+ x 5)") === 15, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(lisp.eval("((lambda (x) (* x x)) 5)") === 25, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
