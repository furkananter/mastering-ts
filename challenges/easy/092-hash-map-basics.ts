/**
 * CHALLENGE: HashMap Basics
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Object as hash map
 * - CRUD operations
 * - Key existence checking
 *
 * Problem:
 * Create a simple HashMap implementation using an object.
 * Support set, get, has, and delete operations.
 *
 * Requirements:
 * - set(key, value) - store value
 * - get(key) - retrieve value (undefined if not found)
 * - has(key) - check if key exists
 * - delete(key) - remove key-value pair
 *
 * Example:
 * const map = createHashMap();
 * map.set('a', 1);
 * map.get('a');      // 1
 * map.has('a');      // true
 * map.delete('a');
 * map.has('a');      // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface HashMap<K, V> {
  set(key: K, value: V): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  delete(key: K): boolean;
}

function createHashMap<K = any, V = any>(): HashMap<K, V> {
  return {
    set(key: K, value: V): void {},
    get(key: K): V | undefined { return undefined; },
    has(key: K): boolean { return false; },
    delete(key: K): boolean { return false; }
  };
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const map = createHashMap();

  map.set('a', 1);
  console.assert(map.get('a') === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(map.has('a') === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  map.delete('a');
  console.assert(map.has('a') === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(map.get('nonexistent') === undefined, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
