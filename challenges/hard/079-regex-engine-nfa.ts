/**
 * CHALLENGE: Regular Expression Engine using NFA
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Regular expressions
 * - NFA (Nondeterministic Finite Automaton)
 * - Thompson's construction
 * - Epsilon transitions
 *
 * Problem:
 * Build simple regex engine using NFA. Support: ., *, |, concat, ().
 * Use Thompson's construction to build NFA from regex.
 *
 * Requirements:
 * - Parse regex to AST
 * - Build NFA with Thompson's construction
 * - Simulate NFA matching
 * - Support: char, ., *, |, concat, ()
 *
 * Example:
 * const regex = new RegexNFA("a*b|c");
 * regex.match("aaab");  // true
 * regex.match("c");     // true
 * regex.match("d");     // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class NFARegex { constructor(pattern: string) {} match(text: string): boolean { return false; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const regex1 = new RegexNFA("a*b");
  console.assert(regex1.match("aaab") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(regex1.match("b") === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const regex2 = new RegexNFA("a|b");
  console.assert(regex2.match("a") === true && regex2.match("b") === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
