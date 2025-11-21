/**
 * CHALLENGE: Operational Transformation for Collaborative Editing
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Operational Transformation (OT)
 * - Concurrent editing
 * - Operation transformation
 * - Convergence
 *
 * Problem:
 * Implement OT for text editing. Transform operations so that all clients
 * converge to same state despite concurrent edits.
 *
 * Requirements:
 * - Operations: Insert(pos, char), Delete(pos)
 * - transform(op1, op2) transforms op1 against op2
 * - Apply operations to string
 * - Ensure convergence property
 *
 * Example:
 * // Client 1: insert 'x' at 0, Client 2: insert 'y' at 0
 * const op1 = {type: 'insert', pos: 0, char: 'x'};
 * const op2 = {type: 'insert', pos: 0, char: 'y'};
 * const op1_ = transform(op1, op2);  // Adjusted op1
 * // Both converge to same result
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const op1 = {type: 'insert', pos: 0, char: 'x'};
  const op2 = {type: 'insert', pos: 0, char: 'y'};

  const op1_ = transform(op1, op2);
  const op2_ = transform(op2, op1);

  let str1 = "";
  str1 = apply(str1, op1);
  str1 = apply(str1, op2_);

  let str2 = "";
  str2 = apply(str2, op2);
  str2 = apply(str2, op1_);

  console.assert(str1 === str2, "❌ Test 1 failed (convergence)");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
