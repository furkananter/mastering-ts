/**
 * CHALLENGE: Merkle Tree for Data Integrity
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Merkle tree
 * - Cryptographic hashing
 * - Binary tree structure
 * - Verification proofs
 *
 * Problem:
 * Implement Merkle tree for data integrity verification.
 * Support building tree, getting root hash, and generating/verifying proofs.
 *
 * Requirements:
 * - Build Merkle tree from data blocks
 * - getRootHash() returns root hash
 * - getProof(index) returns Merkle proof
 * - verify(data, proof, root) verifies inclusion
 * - Use SHA-256 or similar hash
 *
 * Example:
 * const mt = new MerkleTree(['a', 'b', 'c', 'd']);
 * const root = mt.getRootHash();
 * const proof = mt.getProof(1);  // Proof for 'b'
 * verify('b', proof, root);  // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const mt = new MerkleTree(['a', 'b', 'c', 'd']);
  const root = mt.getRootHash();

  console.assert(root !== null && root.length > 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const proof = mt.getProof(1);
  console.assert(verify('b', proof, root) === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(verify('x', proof, root) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
