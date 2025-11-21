/**
 * CHALLENGE: Token Bucket Rate Limiter
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Rate limiting algorithms
 * - Token bucket pattern
 * - Timestamp tracking
 * - Async behavior
 *
 * Problem:
 * Implement a token bucket rate limiter that allows maxRequests
 * per window (in milliseconds). Requests exceeding limit should wait.
 *
 * Requirements:
 * - Allow maxRequests per window
 * - Return promise that resolves when request allowed
 * - Refill tokens over time
 * - Use token bucket algorithm
 *
 * Example:
 * const limiter = new RateLimiter(2, 1000); // 2 requests per second
 * await limiter.acquire(); // immediate
 * await limiter.acquire(); // immediate
 * await limiter.acquire(); // waits ~1 second
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

async function runTests(): Promise<void> {
  console.log("Running tests...\n");

  const limiter = new RateLimiter(2, 100);

  const start = Date.now();

  await limiter.acquire();
  await limiter.acquire();
  const elapsed1 = Date.now() - start;
  console.assert(elapsed1 < 50, "❌ Test 1 failed: first 2 should be immediate");
  console.log("✅ Test 1 passed");

  await limiter.acquire();
  const elapsed2 = Date.now() - start;
  console.assert(elapsed2 >= 90, "❌ Test 2 failed: 3rd should wait");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
