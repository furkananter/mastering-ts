/**
 * CHALLENGE: Minimax with Alpha-Beta Pruning
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Game theory
 * - Minimax algorithm
 * - Alpha-beta pruning
 * - Game tree search
 *
 * Problem:
 * Implement minimax with alpha-beta pruning for two-player zero-sum games.
 * Return best move and score. Use for games like Tic-Tac-Toe, Connect 4.
 *
 * Requirements:
 * - minimax(state, depth, isMax, α, β)
 * - Return {score, move}
 * - Prune branches with α-β
 * - Handle terminal states
 *
 * Example:
 * // Tic-tac-toe position
 * const board = [['X','O','X'],['O','X','O'],['','','']];
 * findBestMove(board, 'X');  // Returns best move for X
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type GameState = any;
function minimax(state: GameState, depth: number, isMaximizing: boolean, alpha: number, beta: number): number { return 0; }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const board1 = [['X','O','X'],['O','X','O'],['','','']];
  const move = findBestMove(board1, 'X');

  console.assert(move !== null, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const board2 = [['X','O',''],['','X',''],['','','O']];
  const move2 = findBestMove(board2, 'X');
  console.assert(move2 !== null, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
