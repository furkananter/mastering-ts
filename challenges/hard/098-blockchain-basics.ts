/**
 * CHALLENGE: Simple Blockchain Implementation
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Blockchain structure
 * - Proof of work
 * - Hashing
 * - Chain validation
 *
 * Problem:
 * Implement basic blockchain with proof-of-work. Blocks contain data,
 * previous hash, and nonce. Mining finds valid nonce (hash starts with zeros).
 *
 * Requirements:
 * - Block: {data, prevHash, nonce, hash, timestamp}
 * - mine(difficulty) finds valid nonce
 * - addBlock(data) mines and adds block
 * - isValid() validates entire chain
 * - Difficulty: number of leading zeros
 *
 * Example:
 * const bc = new Blockchain(2);  // difficulty 2
 * bc.addBlock('Transaction 1');
 * bc.addBlock('Transaction 2');
 * bc.isValid();  // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const bc = new Blockchain(2);
  bc.addBlock('Transaction 1');
  bc.addBlock('Transaction 2');

  console.assert(bc.chain.length === 3, "❌ Test 1 failed"); // genesis + 2
  console.log("✅ Test 1 passed");

  console.assert(bc.isValid() === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  // Tamper with block
  bc.chain[1].data = 'Tampered';
  console.assert(bc.isValid() === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
