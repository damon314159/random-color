const { xyzToRgb } = require("../converters");
const randXYZ = require("./randXYZ");

const randRGB = () => xyzToRgb(...randXYZ());

module.exports = randRGB;
