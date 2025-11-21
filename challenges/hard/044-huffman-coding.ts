/**
 * CHALLENGE: Huffman Coding for Text Compression
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Huffman coding algorithm
 * - Priority queue / Min heap
 * - Binary tree construction
 * - Prefix codes
 *
 * Problem:
 * Implement Huffman coding for text compression and decompression.
 * Build optimal prefix code based on character frequencies.
 *
 * Requirements:
 * - encode(text) returns bit string
 * - decode(encoded) returns original text
 * - Build Huffman tree from frequencies
 * - Handle edge cases (single char, empty)
 *
 * Example:
 * const huff = new HuffmanCoding("aaabbcd");
 * const encoded = huff.encode("aaabbcd");
 * huff.decode(encoded);  // "aaabbcd"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface HuffmanNode {
  char: string | null;
  freq: number;
  left: HuffmanNode | null;
  right: HuffmanNode | null;
}

type CodeTable = Map<string, string>;

class HuffmanCoding {
  private root: HuffmanNode | null;
  private codes: CodeTable;

  constructor(text: string) {
    this.codes = new Map();
    this.root = this.buildTree(text);
    this.buildCodes(this.root, '');
  }

  encode(text: string): string {
    // Implementation here
    return '';
  }

  decode(encoded: string): string {
    // Implementation here
    return '';
  }

  private buildTree(text: string): HuffmanNode | null {
    // Build Huffman tree from character frequencies
    return null;
  }

  private buildCodes(node: HuffmanNode | null, code: string): void {
    // Generate prefix codes
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const huff = new HuffmanCoding("aaabbcd");
  const encoded = huff.encode("aaabbcd");

  console.assert(encoded.length < "aaabbcd".length * 8, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const decoded = huff.decode(encoded);
  console.assert(decoded === "aaabbcd", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
