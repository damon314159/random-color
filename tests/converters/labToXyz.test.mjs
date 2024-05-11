import { describe, it, expect } from "vitest";
import { randLab } from "../../src/generators/index.js";
import { labToXyz } from "../../src/converters/index.js";

describe("labToXyz function", () => {
  for (let i = 0; i < 25; i += 1) {
    it("converts Lab color to XYZ color with default whitepoint (icc)", () => {
      const XYZ = labToXyz(...randLab());
      expect(XYZ).toHaveLength(3);
      expect(XYZ[0]).toBeTypeOf("number");
      expect(XYZ[1]).toBeTypeOf("number");
      expect(XYZ[2]).toBeTypeOf("number");
    });

    it("converts Lab color to XYZ color with custom whitepoint (d65)", () => {
      const XYZ = labToXyz(...randLab(), "d65");
      expect(XYZ).toHaveLength(3);
      expect(XYZ[0]).toBeTypeOf("number");
      expect(XYZ[1]).toBeTypeOf("number");
      expect(XYZ[2]).toBeTypeOf("number");
    });

    it("converts Lab color to XYZ color with another custom whitepoint (a)", () => {
      const XYZ = labToXyz(...randLab(), "a");
      expect(XYZ).toHaveLength(3);
      expect(XYZ[0]).toBeTypeOf("number");
      expect(XYZ[1]).toBeTypeOf("number");
      expect(XYZ[2]).toBeTypeOf("number");
    });

    it("converts Lab color to XYZ color with equal-energy radiator whitepoint (e)", () => {
      const XYZ = labToXyz(...randLab(), "e");
      expect(XYZ).toHaveLength(3);
      expect(XYZ[0]).toBeTypeOf("number");
      expect(XYZ[1]).toBeTypeOf("number");
      expect(XYZ[2]).toBeTypeOf("number");
    });
  }
});
