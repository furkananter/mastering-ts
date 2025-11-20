/**
 * CHALLENGE: Earley Parser for Context-Free Grammars
 *
 * Difficulty: Hard
 * Estimated Time: 50 minutes
 *
 * Topics to know:
 * - Earley parsing algorithm
 * - Context-free grammars
 * - Chart parsing
 * - Prediction, scanning, completion
 *
 * Problem:
 * Implement Earley parser that handles any context-free grammar.
 * Use dynamic programming with chart (sets of items).
 *
 * Requirements:
 * - Build chart with Earley items
 * - Prediction, scanning, completion steps
 * - Handle left recursion and ambiguity
 * - Return parse success/failure
 *
 * Example:
 * const grammar = {
 *   'S': [['N', 'P'], ['S', 'and', 'S']],
 *   'N': [['dogs'], ['cats']],
 *   'P': [['run'], ['sleep']]
 * };
 * const parser = new EarleyParser(grammar, 'S');
 * parser.parse(['dogs', 'run']);  // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const grammar = {
    'S': [['N', 'P']],
    'N': [['dogs'], ['cats']],
    'P': [['run'], ['sleep']]
  };

  const parser = new EarleyParser(grammar, 'S');

  console.assert(parser.parse(['dogs', 'run']) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(parser.parse(['cats', 'sleep']) === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(parser.parse(['dogs', 'dogs']) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
