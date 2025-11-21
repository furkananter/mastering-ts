/**
 * CHALLENGE: Word Ladder
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - BFS on implicit graph
 * - String transformations
 * - Queue usage
 * - Shortest path
 *
 * Problem:
 * Transform beginWord to endWord by changing one letter at a time.
 * Each transformed word must be in wordList. Return length of shortest
 * transformation sequence. Return 0 if impossible.
 *
 * Requirements:
 * - Use BFS for shortest path
 * - Only one letter changes per step
 * - All intermediate words in wordList
 * - Return sequence length
 *
 * Example:
 * wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"]);
 * // 5 ("hit"->"hot"->"dot"->"dog"->"cog")
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  // TODO: Implement word ladder using BFS
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"]);
  console.assert(result1 === 5, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = wordLadder("hit", "cog", ["hot","dot","dog","lot","log"]);
  console.assert(result2 === 0, "❌ Test 2 failed: cog not in list");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
