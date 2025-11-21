/**
 * CHALLENGE: Simple Bytecode Compiler and VM
 *
 * Difficulty: Hard
 * Estimated Time: 50 minutes
 *
 * Topics to know:
 * - Bytecode compilation
 * - Virtual machine
 * - Stack-based execution
 * - Instruction set design
 *
 * Problem:
 * Build simple bytecode compiler and VM for arithmetic expressions.
 * Compile to bytecode, then execute on stack-based VM.
 *
 * Requirements:
 * - Parse expression to AST
 * - Compile AST to bytecode (PUSH, ADD, SUB, MUL, DIV)
 * - VM with stack for execution
 * - Execute bytecode and return result
 *
 * Example:
 * const expr = "2 + 3 * 4";
 * const bytecode = compile(expr);  // [PUSH 2, PUSH 3, PUSH 4, MUL, ADD]
 * execute(bytecode);  // 14
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const bytecode1 = compile("2 + 3 * 4");
  const result1 = execute(bytecode1);
  console.assert(result1 === 14, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const bytecode2 = compile("10 / 2 - 3");
  const result2 = execute(bytecode2);
  console.assert(result2 === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
