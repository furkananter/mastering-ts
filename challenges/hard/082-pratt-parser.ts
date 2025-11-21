/**
 * CHALLENGE: Pratt Parser (Top-Down Operator Precedence)
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Pratt parsing
 * - Operator precedence
 * - Top-down parsing
 * - Prefix/infix/postfix operators
 *
 * Problem:
 * Implement Pratt parser for expression parsing. Handle operator precedence
 * elegantly without grammar rules. Support prefix, infix, postfix operators.
 *
 * Requirements:
 * - Token stream with types and precedence
 * - parseExpression(precedence)
 * - Handle prefix operators (-, !)
 * - Handle infix operators (+, -, *, /, ^)
 * - Return AST
 *
 * Example:
 * const parser = new PrattParser("1 + 2 * 3");
 * parser.parse();  // AST: {op: '+', left: 1, right: {op: '*', left: 2, right: 3}}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface PrattRule { prefix?: () => any; infix?: (left: any) => any; precedence: number; }
class PrattParser { constructor(rules: Map<string, PrattRule>) {} parse(tokens: string[]): any { return null; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const parser1 = new PrattParser("1 + 2 * 3");
  const ast1 = parser1.parse();
  console.assert(ast1.op === '+' && ast1.right.op === '*', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const parser2 = new PrattParser("2 ^ 3 ^ 2");
  const ast2 = parser2.parse();
  console.assert(ast2.op === '^', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
