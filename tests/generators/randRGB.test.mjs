import { describe, it, expect } from "vitest";
import { randRGB } from "../../src/generators/index.js";

describe("randRGB function", () => {
  for (let i = 0; i < 100; i += 1) {
    it("generates an array of random numbers", () => {
      const RGB = randRGB();
      expect(RGB).toHaveLength(3);
      expect(RGB[0]).toBeTypeOf("number");
      expect(RGB[1]).toBeTypeOf("number");
      expect(RGB[2]).toBeTypeOf("number");
    });
  }
});
