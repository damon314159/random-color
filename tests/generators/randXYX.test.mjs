import { describe, it, expect } from "vitest";
import { randXYZ } from "../../src/generators/index.js";

describe("randXYZ function", () => {
  for (let i = 0; i < 100; i += 1) {
    it("generates an array of random numbers", () => {
      const XYZ = randXYZ();
      expect(XYZ).toHaveLength(3);
      expect(XYZ[0]).toBeTypeOf("number");
      expect(XYZ[1]).toBeTypeOf("number");
      expect(XYZ[2]).toBeTypeOf("number");
    });
  }
});
