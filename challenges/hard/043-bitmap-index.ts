/**
 * CHALLENGE: Bitmap Index for Fast Set Operations
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Bitmap indexing
 * - Bitwise operations
 * - Set operations
 * - Space-efficient storage
 *
 * Problem:
 * Implement bitmap index for fast set membership, union, intersection.
 * Use bit arrays for space-efficient representation.
 *
 * Requirements:
 * - add(value) adds to set
 * - contains(value) checks membership
 * - union(other), intersection(other), difference(other)
 * - O(1) add/contains, O(n/32) set ops
 *
 * Example:
 * const b1 = new BitmapIndex();
 * b1.add(5); b1.add(10);
 * const b2 = new BitmapIndex();
 * b2.add(10); b2.add(15);
 * b1.intersection(b2);  // BitmapIndex with {10}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class BitmapIndex {
  private bitmap: Uint32Array;
  private size: number;

  constructor(maxValue: number = 1000) {
    this.size = Math.ceil(maxValue / 32);
    this.bitmap = new Uint32Array(this.size);
  }

  add(value: number): void {
    // Implementation here
  }

  contains(value: number): boolean {
    // Implementation here
    return false;
  }

  union(other: BitmapIndex): BitmapIndex {
    // Implementation here
    const result = new BitmapIndex(this.size * 32);
    return result;
  }

  intersection(other: BitmapIndex): BitmapIndex {
    // Implementation here
    const result = new BitmapIndex(this.size * 32);
    return result;
  }

  difference(other: BitmapIndex): BitmapIndex {
    // Implementation here
    const result = new BitmapIndex(this.size * 32);
    return result;
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const b1 = new BitmapIndex();
  b1.add(5);
  b1.add(10);

  console.assert(b1.contains(5) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const b2 = new BitmapIndex();
  b2.add(10);
  b2.add(15);

  const inter = b1.intersection(b2);
  console.assert(inter.contains(10) === true && inter.contains(5) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
