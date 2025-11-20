/**
 * CHALLENGE: Event Sourcing with CQRS Pattern
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Event sourcing
 * - CQRS (Command Query Responsibility Segregation)
 * - Event store
 * - Projections
 *
 * Problem:
 * Implement event sourcing system with CQRS. Commands produce events,
 * events stored in log, state rebuilt by replaying events.
 *
 * Requirements:
 * - Command handlers produce events
 * - Event store (append-only log)
 * - Event replaying to rebuild state
 * - Query model (projections)
 * - Snapshots for optimization
 *
 * Example:
 * const es = new EventStore();
 * es.dispatch({type: 'CREATE_USER', id: 1, name: 'Alice'});
 * es.dispatch({type: 'UPDATE_USER', id: 1, name: 'Bob'});
 * es.query(1);  // {id: 1, name: 'Bob'}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const es = new EventStore();
  es.dispatch({type: 'CREATE_USER', id: 1, name: 'Alice'});
  es.dispatch({type: 'UPDATE_USER', id: 1, name: 'Bob'});

  const user = es.query(1);
  console.assert(user.name === 'Bob', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const events = es.getEvents(1);
  console.assert(events.length === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
