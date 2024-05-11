// Convert to sRGB
const xyzToRgb = (X, Y, Z) => {
  // M is a transformation matrix, the inverse of the RGB to XYZ matrix
  const M = [
    [3.2404542, -1.5371385, -0.4985314],
    [-0.969266, 1.8760108, 0.041556],
    [0.0556434, -0.2040259, 1.0572252],
  ];
  // Define column vector
  const XYZ = [X, Y, Z];

  // Apply M to XYZ vector to get linear channels
  const rbg = M.map((row) =>
    row.reduce((dotProd, entry, i) => dotProd + entry * XYZ[i], 0)
  );

  // Companding to non-linear channels
  const RGB = rbg.map((el) =>
    el > 0.0031308 ? 1.055 * el ** (5 / 12) - 0.055 : 12.92 * el
  );
  return RGB;
};

module.exports = xyzToRgb;
