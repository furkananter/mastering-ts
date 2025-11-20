/**
 * CHALLENGE: Bloom Filter - Probabilistic Set Membership
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Bloom filter
 * - Probabilistic data structures
 * - Hash functions
 * - False positive rates
 *
 * Problem:
 * Implement Bloom filter for space-efficient set membership testing.
 * Allow false positives but never false negatives.
 *
 * Requirements:
 * - Constructor(size, numHashes)
 * - add(item) adds to filter
 * - mightContain(item) returns boolean
 * - Use multiple hash functions
 *
 * Example:
 * const bf = new BloomFilter(100, 3);
 * bf.add("hello");
 * bf.mightContain("hello");  // true
 * bf.mightContain("world");  // probably false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const bf = new BloomFilter(100, 3);
  bf.add("hello");
  bf.add("world");

  console.assert(bf.mightContain("hello") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(bf.mightContain("world") === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  // This might occasionally fail due to false positives, but very unlikely
  let falsePositives = 0;
  for (let i = 0; i < 10; i++) {
    if (bf.mightContain(`test${i}`)) falsePositives++;
  }
  console.assert(falsePositives < 10, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
