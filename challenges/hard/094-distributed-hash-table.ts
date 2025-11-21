/**
 * CHALLENGE: Consistent Hashing for Distributed Hash Table
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Consistent hashing
 * - Distributed systems
 * - Hash ring
 * - Virtual nodes
 *
 * Problem:
 * Implement consistent hashing for DHT. Map keys to nodes using hash ring.
 * Support adding/removing nodes with minimal key reassignment.
 *
 * Requirements:
 * - Hash ring with virtual nodes
 * - addNode(nodeId, vnodes)
 * - removeNode(nodeId)
 * - getNode(key) returns responsible node
 * - Minimize key movement on changes
 *
 * Example:
 * const dht = new ConsistentHash();
 * dht.addNode('node1', 150);  // 150 virtual nodes
 * dht.addNode('node2', 150);
 * dht.getNode('key1');  // 'node1' or 'node2'
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class DHT { constructor(nodeId: string) {} put(key: string, value: any): void {} get(key: string): any { return null; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const dht = new ConsistentHash();
  dht.addNode('node1', 100);
  dht.addNode('node2', 100);

  const node1 = dht.getNode('key1');
  console.assert(node1 === 'node1' || node1 === 'node2', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  dht.removeNode('node1');
  const node2 = dht.getNode('key1');
  console.assert(node2 === 'node2', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
