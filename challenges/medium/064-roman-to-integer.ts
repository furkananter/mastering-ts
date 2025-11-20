/**
 * CHALLENGE: Roman Numeral to Integer
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - String parsing
 * - Hash map
 * - Subtraction rule
 * - Roman numeral system
 *
 * Problem:
 * Convert Roman numeral string to integer.
 * Handle subtraction cases (IV=4, IX=9, XL=40, XC=90, CD=400, CM=900).
 *
 * Requirements:
 * - Map symbols: I=1, V=5, X=10, L=50, C=100, D=500, M=1000
 * - Handle subtraction (smaller before larger)
 * - Return integer value
 * - Valid input guaranteed
 *
 * Example:
 * romanToInt("III");     // 3
 * romanToInt("LVIII");   // 58
 * romanToInt("MCMXCIV"); // 1994
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(romanToInt("III") === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(romanToInt("LVIII") === 58, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(romanToInt("MCMXCIV") === 1994, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(romanToInt("IV") === 4, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
