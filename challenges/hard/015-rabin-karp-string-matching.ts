/**
 * CHALLENGE: Rabin-Karp String Matching with Rolling Hash
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - String algorithms
 * - Rabin-Karp algorithm
 * - Rolling hash technique
 * - Hash collision handling
 *
 * Problem:
 * Implement Rabin-Karp algorithm to find all pattern occurrences in text.
 * Use rolling hash for O(n+m) average time complexity.
 *
 * Requirements:
 * - Use polynomial rolling hash
 * - Handle hash collisions with actual comparison
 * - Return array of starting indices
 * - Choose appropriate prime and base
 *
 * Example:
 * rabinKarp("abracadabra", "abr");  // [0, 7]
 * rabinKarp("aaaa", "aa");          // [0, 1, 2]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type HashValue = number;
type MatchIndices = number[];

const PRIME = 101;
const BASE = 256;

function computeHash(str: string, length: number): HashValue {
  // Helper to compute polynomial rolling hash
  return 0;
}

function rabinKarp(text: string, pattern: string): MatchIndices {
  // Implementation here
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = rabinKarp("abracadabra", "abr");
  console.assert(JSON.stringify(result1) === JSON.stringify([0, 7]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = rabinKarp("aaaa", "aa");
  console.assert(JSON.stringify(result2) === JSON.stringify([0, 1, 2]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = rabinKarp("hello", "world");
  console.assert(JSON.stringify(result3) === JSON.stringify([]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
