/**
 * CHALLENGE: Burrows-Wheeler Transform (BWT)
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Burrows-Wheeler Transform
 * - Text preprocessing for compression
 * - Rotation sorting
 * - Inverse transform
 *
 * Problem:
 * Implement BWT encoding and decoding. BWT rearranges string to group
 * similar characters together, useful for compression.
 *
 * Requirements:
 * - encode(str) returns transformed string and index
 * - decode(bwt, index) returns original string
 * - Use lexicographic rotation sorting
 * - Handle sentinel character
 *
 * Example:
 * const {bwt, index} = encode("banana");
 * // bwt = "annb$aa", index = 3
 * decode(bwt, index);  // "banana"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const {bwt, index} = encode("banana");

  console.assert(bwt.length === "banana".length + 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const decoded = decode(bwt, index);
  console.assert(decoded === "banana", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
