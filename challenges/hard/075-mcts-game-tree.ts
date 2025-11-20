/**
 * CHALLENGE: Monte Carlo Tree Search (MCTS)
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Monte Carlo Tree Search
 * - UCB1 selection
 * - Simulation/rollout
 * - Backpropagation
 *
 * Problem:
 * Implement MCTS for game playing. Use selection (UCB1), expansion,
 * simulation (random playout), and backpropagation.
 *
 * Requirements:
 * - Node: wins, visits, children
 * - UCB1: score + c * sqrt(ln(parent.visits)/visits)
 * - Random simulation to terminal state
 * - Backpropagate results
 *
 * Example:
 * const game = new TicTacToe();
 * const mcts = new MCTS(game);
 * mcts.search(1000);  // 1000 simulations
 * mcts.bestMove();    // Returns best move
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const game = new TicTacToe();
  const mcts = new MCTS(game);
  mcts.search(100);

  const move = mcts.bestMove();
  console.assert(move !== null, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const game2 = new TicTacToe([['X','O',''],['','',''],['','','']]);
  const mcts2 = new MCTS(game2);
  mcts2.search(50);
  const move2 = mcts2.bestMove();
  console.assert(move2 !== null, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
