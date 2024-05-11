const labToXyz = (L, a, b, whitepoint = "icc") => {
  const [Xr, Yr, Zr] = ((wp) => {
    switch (wp) {
      case "icc":
        return [0.9642, 1.0, 0.8249]; // Profile Connection Space (PCS) illuminant used in ICC profiles
      case "d65":
        return [0.9504, 1.0, 1.0888]; // CIE standard illuminant D65
      case "d55":
        return [0.9568, 1.0, 0.9214]; // CIE standard illuminant D55
      case "d50":
        return [0.9642, 1.0, 0.8251]; // CIE standard illuminant D50
      case "a":
        return [1.0985, 1.0, 0.3558]; // CIE standard illuminant A
      case "c":
        return [0.9807, 1.0, 1.1822]; // CIE standard illuminant C
      case "e":
        return [1.0, 1.0, 1.0]; // Equal-energy radiator
      default:
        return [0.9642, 1.0, 0.8249]; // ICC
    }
  })(whitepoint); // Get reference whitepoint values

  const e = 216 / 24389; // ICC defined constant
  const k = 24389 / 27; // ICC defined constant

  // Simple translations
  const fy = (L + 16) / 116;
  const fx = a / 500 + fy;
  const fz = fy - b / 200;

  // For reuse
  const fx3 = fx ** 3;
  const fz3 = fz ** 3;

  const Y = (L > k * e ? ((L + 16) / 116) ** 3 : L / k) * Yr;
  const X = (fx3 > e ? fx3 : (116 * fx - 16) / k) * Xr;
  const Z = (fz3 > e ? fz3 : (116 * fz - 16) / k) * Zr;

  return [X, Y, Z];
};

module.exports = labToXyz;
