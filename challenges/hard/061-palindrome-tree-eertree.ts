/**
 * CHALLENGE: Palindrome Tree (Eertree)
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Palindrome tree (Eertree)
 * - String algorithms
 * - Suffix links
 * - All palindromic substrings
 *
 * Problem:
 * Implement palindrome tree to find all unique palindromic substrings
 * in linear time. Use two trees (odd/even length) with suffix links.
 *
 * Requirements:
 * - Build eertree incrementally
 * - countUniquePalindromes() returns count
 * - getAllPalindromes() returns all unique palindromes
 * - O(n) construction time
 *
 * Example:
 * const eertree = new PalindromeTree("abaaba");
 * eertree.countUniquePalindromes();  // 5: "a", "b", "aba", "aa", "abaaba"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const eertree = new PalindromeTree("abaaba");

  console.assert(eertree.countUniquePalindromes() === 5, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const palindromes = eertree.getAllPalindromes();
  console.assert(palindromes.includes("aba") && palindromes.includes("abaaba"), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
