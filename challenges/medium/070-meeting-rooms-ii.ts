/**
 * CHALLENGE: Meeting Rooms II (Min Rooms Required)
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Interval sorting
 * - Min heap
 * - Greedy algorithm
 * - Scheduling
 *
 * Problem:
 * Given meeting time intervals, find minimum number of conference rooms required.
 * Use min heap to track end times.
 *
 * Requirements:
 * - Sort intervals by start time
 * - Use min heap for end times
 * - Track maximum concurrent meetings
 * - Return minimum rooms needed
 *
 * Example:
 * minMeetingRooms([[0,30],[5,10],[15,20]]);  // 2
 * minMeetingRooms([[7,10],[2,4]]);           // 1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Interval = [number, number];

function minMeetingRooms(intervals: Interval[]): number {
  // TODO: Implement meeting rooms II
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(minMeetingRooms([[0,30],[5,10],[15,20]]) === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(minMeetingRooms([[7,10],[2,4]]) === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(minMeetingRooms([[1,5],[8,9],[8,9]]) === 2, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
