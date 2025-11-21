/**
 * CHALLENGE: Raft Consensus Algorithm (Leader Election)
 *
 * Difficulty: Hard
 * Estimated Time: 50 minutes
 *
 * Topics to know:
 * - Raft consensus
 * - Leader election
 * - Distributed consensus
 * - Terms and voting
 *
 * Problem:
 * Implement leader election part of Raft. Nodes can be follower, candidate,
 * or leader. Simulate election with timeouts and votes.
 *
 * Requirements:
 * - Node states: follower, candidate, leader
 * - Election timeout triggers candidate state
 * - RequestVote RPC
 * - Majority voting
 * - Heartbeats from leader
 *
 * Example:
 * const cluster = [new RaftNode(1), new RaftNode(2), new RaftNode(3)];
 * // Simulate network and timeouts
 * // Eventually one becomes leader
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type LogEntry = { term: number; command: any };
class RaftNode { constructor(nodeId: string, peers: string[]) {} appendEntries(entries: LogEntry[]): boolean { return false; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const node1 = new RaftNode(1);
  const node2 = new RaftNode(2);
  const node3 = new RaftNode(3);

  // Simulate election
  node1.startElection([node2, node3]);

  console.assert(node1.state === 'leader' || node1.state === 'follower', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
