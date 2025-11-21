/**
 * CHALLENGE: Aho-Corasick Multi-Pattern Matching
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Aho-Corasick algorithm
 * - Trie + KMP combination
 * - Failure links
 * - Multi-pattern matching
 *
 * Problem:
 * Build Aho-Corasick automaton to find all occurrences of multiple patterns
 * in text simultaneously. Use trie with failure links.
 *
 * Requirements:
 * - Build trie from patterns
 * - Construct failure links (like KMP)
 * - search(text) returns {pattern, index}[]
 * - O(n + m + z) time (n=text, m=patterns, z=matches)
 *
 * Example:
 * const ac = new AhoCorasick(["he", "she", "his", "hers"]);
 * ac.search("ahishers");  // [{pattern: "his", index: 1}, {pattern: "she", index: 3}, ...]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface ACNode {
  children: Map<string, ACNode>;
  fail: ACNode | null;
  output: string[];
}

interface Match {
  pattern: string;
  index: number;
}

class AhoCorasick {
  private root: ACNode;

  constructor(patterns: ReadonlyArray<string>) {
    this.root = {
      children: new Map(),
      fail: null,
      output: []
    };
    // Build trie and failure links
  }

  search(text: string): Match[] {
    // Implementation here
    return [];
  }

  private buildFailureLinks(): void {
    // BFS to construct failure links
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const ac = new AhoCorasick(["he", "she", "his", "hers"]);
  const result = ac.search("ahishers");

  console.assert(result.some(r => r.pattern === "his" && r.index === 1), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(result.some(r => r.pattern === "he" && r.index === 4), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
