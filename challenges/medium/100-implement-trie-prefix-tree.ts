/**
 * CHALLENGE: Implement Trie (Prefix Tree) - Advanced
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Trie data structure
 * - Map/Object for children
 * - Word/prefix differentiation
 * - Character-by-character traversal
 *
 * Problem:
 * Implement Trie with insert, search, startsWith, and delete operations.
 * This is similar to #021 but adds delete operation.
 *
 * Requirements:
 * - insert(word) - add word
 * - search(word) - exact word match
 * - startsWith(prefix) - prefix match
 * - delete(word) - remove word (bonus)
 *
 * Example:
 * const trie = new TrieAdvanced();
 * trie.insert("apple");
 * trie.search("apple");         // true
 * trie.startsWith("app");       // true
 * trie.delete("apple");
 * trie.search("apple");         // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const trie = new TrieAdvanced();
  trie.insert("apple");

  console.assert(trie.search("apple") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(trie.startsWith("app") === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  trie.delete("apple");
  console.assert(trie.search("apple") === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(trie.startsWith("app") === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
