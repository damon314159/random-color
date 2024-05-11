import { describe, it, expect } from "vitest";
import { randXYZ } from "../../src/generators/index.js";
import { xyzToRgb } from "../../src/converters/index.js";

describe("xyzToRgb function", () => {
  for (let i = 0; i < 100; i += 1) {
    it("converts XYZ color to sRGB color", () => {
      const XYZ = xyzToRgb(...randXYZ());
      expect(XYZ).toHaveLength(3);
      expect(XYZ[0]).toBeTypeOf("number");
      expect(XYZ[1]).toBeTypeOf("number");
      expect(XYZ[2]).toBeTypeOf("number");
    });
  }
});
