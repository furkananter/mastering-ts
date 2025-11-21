/**
 * CHALLENGE: Trie with Autocomplete and Frequency Ranking
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Trie data structure
 * - DFS traversal
 * - Frequency tracking
 * - Sorting algorithms
 *
 * Problem:
 * Implement Trie with autocomplete that returns top K most frequent words
 * matching a prefix. Track word insertion frequency.
 *
 * Requirements:
 * - insert(word) - add/increment frequency
 * - autocomplete(prefix, k) - return top k frequent words with prefix
 * - Sort by frequency (desc), then lexicographically
 * - Handle empty prefix
 *
 * Example:
 * const trie = new AutocompleteTrie();
 * trie.insert("apple"); trie.insert("app"); trie.insert("apple");
 * trie.autocomplete("app", 2);  // ["apple", "app"] (apple has freq=2)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
  frequency: number;
}

interface WordFrequency {
  word: string;
  frequency: number;
}

class AutocompleteTrie {
  private root: TrieNode;

  constructor() {
    this.root = {
      children: new Map(),
      isEndOfWord: false,
      frequency: 0
    };
  }

  insert(word: string): void {
    // Implementation here
  }

  autocomplete(prefix: string, k: number): string[] {
    // Implementation here
    return [];
  }

  private collectWords(node: TrieNode, prefix: string, results: WordFrequency[]): void {
    // Helper to collect all words from a node
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const trie = new AutocompleteTrie();
  trie.insert("apple");
  trie.insert("app");
  trie.insert("apple");
  trie.insert("application");

  const result1 = trie.autocomplete("app", 2);
  console.assert(JSON.stringify(result1) === JSON.stringify(["apple", "app"]) || JSON.stringify(result1) === JSON.stringify(["apple", "application"]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = trie.autocomplete("appl", 3);
  console.assert(result2.includes("apple") && result2.includes("application"), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
