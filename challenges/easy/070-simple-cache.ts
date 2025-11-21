/**
 * CHALLENGE: Simple Cache with Map
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Map data structure
 * - get, set, has, delete methods
 * - Closure for encapsulation
 *
 * Problem:
 * Create a simple cache using Map with get, set, and has methods.
 * Return an object with these three methods.
 *
 * Requirements:
 * - set(key, value) - stores a value
 * - get(key) - retrieves a value (undefined if not found)
 * - has(key) - checks if key exists
 *
 * Example:
 * const cache = createCache();
 * cache.set('name', 'Alice');
 * cache.get('name');           // 'Alice'
 * cache.has('name');           // true
 * cache.has('age');            // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface Cache<K, V> {
  set(key: K, value: V): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
}

function createCache<K = any, V = any>(): Cache<K, V> {
  return {
    set(key: K, value: V): void {},
    get(key: K): V | undefined { return undefined; },
    has(key: K): boolean { return false; }
  };
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const cache = createCache();

  cache.set('name', 'Alice');
  console.assert(cache.get('name') === 'Alice', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(cache.has('name') === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(cache.has('age') === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(cache.get('nonexistent') === undefined, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
