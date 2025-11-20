/**
 * CHALLENGE: Suffix Tree Construction (Ukkonen's Algorithm)
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Suffix trees
 * - Ukkonen's algorithm
 * - Online construction
 * - Suffix links
 *
 * Problem:
 * Build suffix tree using Ukkonen's algorithm for efficient substring queries.
 * Support: contains(pattern), countOccurrences(pattern).
 *
 * Requirements:
 * - Build suffix tree in O(n) time
 * - contains(s) checks if s is substring
 * - countOccurrences(s) counts occurrences
 * - Use suffix links for efficiency
 *
 * Example:
 * const st = new SuffixTree("banana");
 * st.contains("ana");           // true
 * st.countOccurrences("ana");   // 2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const st = new SuffixTree("banana");

  console.assert(st.contains("ana") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(st.countOccurrences("ana") === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(st.contains("nan") === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
