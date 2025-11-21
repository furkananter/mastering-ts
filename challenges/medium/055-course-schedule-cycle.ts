/**
 * CHALLENGE: Course Schedule (Cycle Detection)
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Directed graph cycle detection
 * - DFS with states
 * - Topological sort concepts
 * - Prerequisites/dependencies
 *
 * Problem:
 * Given numCourses and prerequisites [a, b] meaning "a depends on b",
 * determine if all courses can be finished (no cycles).
 *
 * Requirements:
 * - Detect cycle in directed graph
 * - Use DFS with visiting states
 * - Return true if no cycle (can finish)
 * - Build adjacency list
 *
 * Example:
 * canFinish(2, [[1,0]]);           // true
 * canFinish(2, [[1,0],[0,1]]);     // false (cycle)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Graph = Record<number, number[]>;

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // TODO: Implement course schedule (detect cycles)
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(canFinish(2, [[1,0]]) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(canFinish(2, [[1,0],[0,1]]) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(canFinish(3, [[0,1],[0,2],[1,2]]) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
