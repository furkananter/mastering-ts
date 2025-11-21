/**
 * CHALLENGE: LL(1) Parser Generator
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Context-free grammars
 * - LL(1) parsing
 * - First/Follow sets
 * - Parse table construction
 *
 * Problem:
 * Build LL(1) parser from context-free grammar. Compute First/Follow sets,
 * construct parse table, and parse input strings.
 *
 * Requirements:
 * - Grammar: {nonTerminal: [production1, production2, ...]}
 * - Compute First sets
 * - Compute Follow sets
 * - Build parse table
 * - Parse input string
 *
 * Example:
 * const grammar = {
 *   'S': [['a', 'S', 'b'], ['c']],  // S → aSb | c
 * };
 * const parser = new LL1Parser(grammar, 'S');
 * parser.parse(['a','c','b']);  // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Grammar = Map<string, string[][]>;
class LL1Parser { constructor(grammar: Grammar) {} parse(tokens: string[]): boolean { return false; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const grammar = {
    'S': [['a', 'S', 'b'], ['c']]
  };

  const parser = new LL1Parser(grammar, 'S');

  console.assert(parser.parse(['a','c','b']) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(parser.parse(['c']) === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(parser.parse(['a','b']) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
