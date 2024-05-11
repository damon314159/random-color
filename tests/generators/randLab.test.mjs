import { describe, it, expect } from "vitest";
import { randLab } from "../../src/generators/index.js";

describe("randLab function", () => {
  for (let i = 0; i < 100; i += 1) {
    it("generates an array of random numbers within specified range", () => {
      const lab = randLab();
      expect(lab).toHaveLength(3);
      expect(lab[0]).toBeGreaterThanOrEqual(0);
      expect(lab[0]).toBeLessThan(100);
      expect(lab[1]).toBeGreaterThanOrEqual(-125);
      expect(lab[1]).toBeLessThan(125);
      expect(lab[2]).toBeGreaterThanOrEqual(-125);
      expect(lab[2]).toBeLessThan(125);
    });
  }
});
