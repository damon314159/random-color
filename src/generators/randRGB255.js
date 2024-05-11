const randRGB = require("./randRGB");

const randRGB255 = () => randRGB().map((el) => el * 255);

module.exports = randRGB255;
