/**
 * CHALLENGE: Simplify Unix Path
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Stack for path components
 * - String split/join
 * - Unix path rules
 * - Edge case handling
 *
 * Problem:
 * Simplify Unix absolute path. Handle ".." (up), "." (current), "//" (extra slashes).
 *
 * Requirements:
 * - Always start with "/"
 * - ".." goes up one directory
 * - "." is current directory (ignore)
 * - Multiple slashes treated as single
 * - Result in canonical form
 *
 * Example:
 * simplifyPath("/home/");                 // "/home"
 * simplifyPath("/../");                   // "/"
 * simplifyPath("/home//foo/");            // "/home/foo"
 * simplifyPath("/a/./b/../../c/");        // "/c"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(simplifyPath("/home/") === "/home", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(simplifyPath("/../") === "/", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(simplifyPath("/home//foo/") === "/home/foo", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(simplifyPath("/a/./b/../../c/") === "/c", "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
