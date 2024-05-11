import { describe, it, expect } from "vitest";
import { randRGB255 } from "../../src/generators/index.js";

describe("randRGB255 function", () => {
  for (let i = 0; i < 100; i += 1) {
    it("generates an array of random numbers", () => {
      const RGB = randRGB255();
      expect(RGB).toHaveLength(3);
      expect(RGB[0]).toBeTypeOf("number");
      expect(RGB[1]).toBeTypeOf("number");
      expect(RGB[2]).toBeTypeOf("number");
    });
  }
});
