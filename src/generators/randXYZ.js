const { labToXyz } = require("../converters");
const randLab = require("./randLab");

const randXYZ = (whitepoint = "icc") => labToXyz(...randLab(), whitepoint);

module.exports = randXYZ;
