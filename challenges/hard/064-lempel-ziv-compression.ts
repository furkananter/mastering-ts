/**
 * CHALLENGE: LZ77 Compression Algorithm
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - LZ77 compression
 * - Sliding window
 * - Dictionary encoding
 * - (offset, length, char) tuples
 *
 * Problem:
 * Implement LZ77 compression algorithm. Find longest matches in sliding
 * window and encode as (offset, length, next_char) tuples.
 *
 * Requirements:
 * - compress(text) returns list of tuples
 * - decompress(tuples) returns original text
 * - Use sliding window (e.g., size 4096)
 * - Lookahead buffer (e.g., size 18)
 *
 * Example:
 * const compressed = compress("abcabcabc");
 * // [(0, 0, 'a'), (0, 0, 'b'), (0, 0, 'c'), (3, 6, '')]
 * decompress(compressed);  // "abcabcabc"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const compressed = compress("abcabcabc");

  console.assert(compressed.length < 9, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const decompressed = decompress(compressed);
  console.assert(decompressed === "abcabcabc", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
