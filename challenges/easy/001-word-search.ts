/**
 * CHALLENGE: Word Search Setup
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Array methods
 * - Set data structure
 * - Type annotations
 * - Optional chaining (?.)
 *
 * Problem:
 * Implement two functions:
 * 1. setup() - Takes an array of words and stores them for later use
 * 2. hasWord() - Returns true if the word exists in the stored collection
 *
 * Requirements:
 * - Use Set for O(1) lookup performance
 * - Handle edge cases (undefined, null, empty string)
 * - setup() can be called multiple times (overwrites previous data)
 *
 * Example:
 * setup(["cat", "dog", "bar"]);
 * hasWord("cat");    // true
 * hasWord("bird");   // false
 * hasWord("");       // false
 * hasWord(null);     // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// TypeScript Implementation Template:
let wordSet: Set<string> | null = null;

function setup(words: string[]): void {
  // Your implementation here
}

function hasWord(word: string | null | undefined): boolean {
  // Your implementation here
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  // Test 1: Basic functionality
  setup(["cat", "dog", "bar"]);
  console.assert(hasWord("cat") === true, "❌ Test 1 failed: 'cat' should exist");
  console.assert(hasWord("dog") === true, "❌ Test 1 failed: 'dog' should exist");
  console.assert(hasWord("bird") === false, "❌ Test 1 failed: 'bird' should not exist");
  console.log("✅ Test 1 passed: Basic functionality");

  // Test 2: Edge cases
  console.assert(hasWord("") === false, "❌ Test 2 failed: Empty string should return false");
  console.assert(hasWord(null as any) === false, "❌ Test 2 failed: null should return false");
  console.assert(hasWord(undefined as any) === false, "❌ Test 2 failed: undefined should return false");
  console.log("✅ Test 2 passed: Edge cases");

  // Test 3: Setup overwrites previous data
  setup(["apple", "orange"]);
  console.assert(hasWord("apple") === true, "❌ Test 3 failed: 'apple' should exist");
  console.assert(hasWord("cat") === false, "❌ Test 3 failed: 'cat' should not exist after new setup");
  console.log("✅ Test 3 passed: Setup overwrites data");

  // Test 4: Empty array
  setup([]);
  console.assert(hasWord("anything") === false, "❌ Test 4 failed: Empty setup should have no words");
  console.log("✅ Test 4 passed: Empty array");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
