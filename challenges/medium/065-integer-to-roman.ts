/**
 * CHALLENGE: Integer to Roman Numeral
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Greedy algorithm
 * - Value mapping
 * - String building
 * - Roman numeral system
 *
 * Problem:
 * Convert integer (1-3999) to Roman numeral string.
 * Use greedy approach with predefined values.
 *
 * Requirements:
 * - Map values including subtractive: M=1000, CM=900, D=500, CD=400, etc.
 * - Use largest values first (greedy)
 * - Build string by appending symbols
 * - Range: 1 to 3999
 *
 * Example:
 * intToRoman(3);      // "III"
 * intToRoman(58);     // "LVIII"
 * intToRoman(1994);   // "MCMXCIV"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(intToRoman(3) === "III", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(intToRoman(58) === "LVIII", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(intToRoman(1994) === "MCMXCIV", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(intToRoman(4) === "IV", "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
