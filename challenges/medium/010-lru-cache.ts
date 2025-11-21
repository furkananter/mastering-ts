/**
 * CHALLENGE: LRU Cache
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - LRU (Least Recently Used) algorithm
 * - Map data structure (maintains insertion order)
 * - Cache eviction
 * - O(1) operations
 *
 * Problem:
 * Implement an LRU Cache with get and put operations.
 * When capacity is reached, remove the least recently used item.
 *
 * Requirements:
 * - get(key) - return value or undefined
 * - put(key, value) - insert or update
 * - Evict LRU item when at capacity
 * - Both operations O(1)
 *
 * Example:
 * const cache = new LRUCache(2);
 * cache.put('a', 1);
 * cache.put('b', 2);
 * cache.put('c', 3); // evicts 'a'
 * cache.get('a');    // undefined
 * cache.get('b');    // 2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class LRUCache<K = string, V = any> {
  private capacity: number;
  private cache: Map<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: K): V | undefined {
    // TODO: Implement get
    throw new Error("Not implemented");
  }

  put(key: K, value: V): void {
    // TODO: Implement put
    throw new Error("Not implemented");
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const cache = new LRUCache(2);
  cache.put('a', 1);
  cache.put('b', 2);

  console.assert(cache.get('a') === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  cache.put('c', 3); // evicts 'b'
  console.assert(cache.get('b') === undefined, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(cache.get('c') === 3, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
