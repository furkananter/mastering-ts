/**
 * CHALLENGE: Group Anagrams
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - String sorting
 * - Hash maps
 * - Anagram detection
 * - Grouping algorithms
 *
 * Problem:
 * Group strings that are anagrams of each other.
 * Return array of grouped anagrams.
 *
 * Requirements:
 * - Group anagrams together
 * - Use sorted string as key
 * - Return array of arrays
 * - Preserve input order within groups
 *
 * Example:
 * groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
 * // [["eat","tea","ate"], ["tan","nat"], ["bat"]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function groupAnagrams(strs: string[]): string[][] {
  // TODO: Implement group anagrams
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
  console.assert(result1.length === 3, "❌ Test 1 failed: should have 3 groups");
  console.log("✅ Test 1 passed");

  const result2 = groupAnagrams([""]);
  console.assert(result2.length === 1 && result2[0].length === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = groupAnagrams(["a"]);
  console.assert(JSON.stringify(result3) === JSON.stringify([["a"]]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
