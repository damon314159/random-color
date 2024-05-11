// This file is just cut down versions of the src files
// This was done to make an example page without bundling or multiple script tags.

// DO NOT use this code, import the modules as normal, as described in README.md

const randRange = (high, low = 0) => Math.random() * (high - low) + low;

const labToXyz = (L, a, b) => {
  const [Xr, Yr, Zr] = [0.9642, 1.0, 0.8249];
  const e = 216 / 24389;
  const k = 24389 / 27;
  const fy = (L + 16) / 116;
  const fx = a / 500 + fy;
  const fz = fy - b / 200;
  const fx3 = fx ** 3;
  const fz3 = fz ** 3;
  const Y = (L > k * e ? ((L + 16) / 116) ** 3 : L / k) * Yr;
  const X = (fx3 > e ? fx3 : (116 * fx - 16) / k) * Xr;
  const Z = (fz3 > e ? fz3 : (116 * fz - 16) / k) * Zr;
  return [X, Y, Z];
};

const xyzToRgb255 = (X, Y, Z) => {
  const M = [
    [3.2404542, -1.5371385, -0.4985314],
    [-0.969266, 1.8760108, 0.041556],
    [0.0556434, -0.2040259, 1.0572252],
  ];
  const XYZ = [X, Y, Z];
  const rgb = M.map((row) =>
    row.reduce((dotProd, entry, i) => dotProd + entry * XYZ[i], 0)
  );
  const RGB = rgb
    .map((el) => (el > 0.0031308 ? 1.055 * el ** (5 / 12) - 0.055 : 12.92 * el))
    .map((el) => 255 * el);
  return RGB;
};

const randLab = () => [
  randRange(100),
  randRange(125, -125),
  randRange(125, -125),
];

const Lab = randLab();
const XYZ = labToXyz(...Lab);
const RGB = xyzToRgb255(...XYZ);

document.querySelector(
  ".Lab"
).style.backgroundColor = `lab(${Lab[0]} ${Lab[1]} ${Lab[2]})`;

document.querySelector(
  ".XYZ"
).style.backgroundColor = `color(xyz ${XYZ[0]} ${XYZ[1]} ${XYZ[2]})`;

document.querySelector(
  ".RGB"
).style.backgroundColor = `rgb(${RGB[0]} ${RGB[1]} ${RGB[2]})`;
