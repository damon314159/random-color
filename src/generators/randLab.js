const { randRange } = require("../utils");

const randLab = () => [
  randRange(100),
  randRange(125, -125),
  randRange(125, -125),
];

module.exports = randLab;
