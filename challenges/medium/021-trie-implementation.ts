/**
 * CHALLENGE: Trie (Prefix Tree) Implementation
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Trie data structure
 * - Tree traversal
 * - String prefix matching
 * - Map/Object for children
 *
 * Problem:
 * Implement a Trie with insert, search, and startsWith methods.
 * Useful for autocomplete and prefix matching.
 *
 * Requirements:
 * - insert(word) - add word to trie
 * - search(word) - check if exact word exists
 * - startsWith(prefix) - check if any word starts with prefix
 * - Case sensitive
 *
 * Example:
 * const trie = new Trie();
 * trie.insert('apple');
 * trie.search('apple');       // true
 * trie.search('app');         // false
 * trie.startsWith('app');     // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const trie = new Trie();
  trie.insert('apple');

  console.assert(trie.search('apple') === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(trie.search('app') === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(trie.startsWith('app') === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  trie.insert('app');
  console.assert(trie.search('app') === true, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
