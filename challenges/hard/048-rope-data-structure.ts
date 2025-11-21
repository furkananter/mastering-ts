/**
 * CHALLENGE: Rope Data Structure for Large String Operations
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Rope data structure
 * - Binary tree of strings
 * - Efficient string operations
 * - Rebalancing
 *
 * Problem:
 * Implement Rope for efficient large string operations (insert, delete, substring).
 * Use binary tree where leaves contain string chunks.
 *
 * Requirements:
 * - Constructor(str) creates rope
 * - charAt(index) returns character
 * - substring(start, end) returns substring
 * - concat(other) concatenates ropes
 * - insert(index, str), delete(start, end)
 *
 * Example:
 * const rope = new Rope("Hello World");
 * rope.charAt(6);  // "W"
 * rope.substring(0, 5);  // "Hello"
 * rope.insert(5, " Beautiful");
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface RopeNode {
  weight: number;
  str: string | null;
  left: RopeNode | null;
  right: RopeNode | null;
}

class Rope {
  private root: RopeNode | null;

  constructor(str: string) {
    this.root = { weight: str.length, str, left: null, right: null };
  }

  charAt(index: number): string {
    // Implementation here
    return '';
  }

  substring(start: number, end: number): string {
    // Implementation here
    return '';
  }

  concat(other: Rope): Rope {
    // Implementation here
    return this;
  }

  insert(index: number, str: string): void {
    // Implementation here
  }

  delete(start: number, end: number): void {
    // Implementation here
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const rope = new Rope("Hello World");

  console.assert(rope.charAt(6) === "W", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(rope.substring(0, 5) === "Hello", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  rope.insert(5, " Beautiful");
  console.assert(rope.substring(0, 15) === "Hello Beautiful", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
