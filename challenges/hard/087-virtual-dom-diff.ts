/**
 * CHALLENGE: Virtual DOM Diffing Algorithm
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Virtual DOM
 * - Tree diffing
 * - Reconciliation
 * - Minimal updates
 *
 * Problem:
 * Implement Virtual DOM diffing algorithm to compute minimal set of changes
 * between two trees. Similar to React's reconciliation.
 *
 * Requirements:
 * - VNode: {type, props, children}
 * - diff(oldVNode, newVNode) returns patches
 * - Patch types: CREATE, UPDATE, DELETE, REPLACE
 * - Key-based reconciliation for lists
 * - Return patch list
 *
 * Example:
 * const old = {type: 'div', props: {}, children: [{type: 'span', props: {}, children: ['Hello']}]};
 * const new_ = {type: 'div', props: {}, children: [{type: 'span', props: {}, children: ['World']}]};
 * diff(old, new_);  // [{type: 'UPDATE', path: [0, 0], value: 'World'}]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const old = {type: 'div', props: {}, children: [{type: 'span', props: {}, children: ['Hello']}]};
  const new_ = {type: 'div', props: {}, children: [{type: 'span', props: {}, children: ['World']}]};

  const patches = diff(old, new_);
  console.assert(patches.length > 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const old2 = {type: 'div', props: {}, children: []};
  const new2 = {type: 'div', props: {}, children: [{type: 'span', props: {}, children: []}]};
  const patches2 = diff(old2, new2);
  console.assert(patches2.some(p => p.type === 'CREATE'), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
