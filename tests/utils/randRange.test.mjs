import { describe, it, expect } from "vitest";
import { randRange } from "../../src/utils/index.js";

describe("randRange function", () => {
  it("generates a random number between 0 and 10", () => {
    const result = randRange(10);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(10);
  });

  it("generates a random number between 5 and 15", () => {
    const result = randRange(15, 5);
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThan(15);
  });

  it("generates a random number between -10 and 10", () => {
    const result = randRange(10, -10);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThan(10);
  });

  it("generates a random number between 100 and 200", () => {
    const result = randRange(200, 100);
    expect(result).toBeGreaterThanOrEqual(100);
    expect(result).toBeLessThan(200);
  });

  it("generates a random number between 0 and 1", () => {
    const result = randRange(1);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1);
  });

  for (let i = 0; i < 95; i += 1) {
    it("generates a random number in a random range", () => {
      const high = Math.floor(Math.random() * 1000);
      const low = Math.floor(Math.random() * 1000) - 1000;

      const result = randRange(high, low);
      expect(result).toBeGreaterThanOrEqual(low);
      expect(result).toBeLessThan(high);
    });
  }
});
