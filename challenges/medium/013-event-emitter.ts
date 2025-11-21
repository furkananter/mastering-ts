/**
 * CHALLENGE: Event Emitter
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Observer pattern
 * - Event-driven programming
 * - Callbacks
 * - Map data structure
 *
 * Problem:
 * Implement an event emitter with on, off, and emit methods.
 * Support multiple listeners per event.
 *
 * Requirements:
 * - on(event, callback) - subscribe to event
 * - off(event, callback) - unsubscribe
 * - emit(event, data) - trigger all listeners
 * - Support multiple listeners
 *
 * Example:
 * const emitter = new EventEmitter();
 * emitter.on('data', (val) => console.log(val));
 * emitter.emit('data', 42);  // logs: 42
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type EventCallback<T = any> = (data: T) => void;

class EventEmitter<EventMap extends Record<string, any> = Record<string, any>> {
  private events: Map<keyof EventMap, Set<EventCallback<any>>>;

  constructor() {
    this.events = new Map();
  }

  on<K extends keyof EventMap>(event: K, callback: EventCallback<EventMap[K]>): void {
    // TODO: Implement on
    throw new Error("Not implemented");
  }

  off<K extends keyof EventMap>(event: K, callback: EventCallback<EventMap[K]>): void {
    // TODO: Implement off
    throw new Error("Not implemented");
  }

  emit<K extends keyof EventMap>(event: K, data?: EventMap[K]): void {
    // TODO: Implement emit
    throw new Error("Not implemented");
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const emitter = new EventEmitter();
  let count = 0;

  const listener = () => count++;
  emitter.on('test', listener);
  emitter.emit('test');

  console.assert(count === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  emitter.emit('test');
  console.assert(count === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  emitter.off('test', listener);
  emitter.emit('test');
  console.assert(count === 2, "❌ Test 3 failed: should not trigger after off");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
