# visually-random-color

visually-random-color is a JavaScript library designed to produce visually uniform random colors with minimal bias.

The goal of this package is to generate colors that appear evenly distributed across the color space, avoiding biases towards darker or lighter shades. Naive approaches such as choosing uniformly 0-255 values for RGB colors can lead to a dark skew due to the geometry of RGB's color space.

visually-random-color utilises the [CEILAB color space](https://en.wikipedia.org/wiki/CIELAB_color_space). This space is chosen for its perceptual uniformity, ensuring that colors are generated in a way that provides consistent visual differentiation and keeps color skew as low as possible.

Colors are generated randomly in Lab format, and the package also offers functionality to convert these colors to more common color spaces such as RGB, enabling seamless integration into various applications and environments.

Conversion algorithms sourced from http://www.brucelindbloom.com/, and were implemented from scratch.

## Installation

You can install visually-random-color via npm:

```bash
npm install visually-random-color
```

## Usage

### Generating Random Colors

```javascript
const {
  randRGB,
  randRGB255,
  randLab,
  randXYZ,
} = require("visually-random-color");

// Generate a random RGB color with an array of values scaled to match the nominal 0-1 range
const randomRGB = randRGB();
console.log(randomRGB);

// Generate a random RGB color with an array of values scaled by a factor of 255
const randomRGB255 = randRGB255();
console.log(randomRGB255);

// Generate a random LAB color as an array of values, guaranteed to be in the nominal ranges
const randomLab = randLab();
console.log(randomLab);

// Generate a random XYZ color with an array of values scaled to match the nominal 0-1 range
const randomXYZ = randXYZ();
console.log(randomXYZ);
```

### Default Export

```javascript
const randomColor = require("visually-random-color");

// Default export is the same as randRGB255
const randomColor = randomColor();
console.log(randomColor);
```

### Applying to CSS

The returned arrays can be easily used with the inbuilt CSS functions to apply the color to the webpage, along with any other use case you may have.

```javascript
const Lab = randLab();
const XYZ = randXYZ(...Lab);
const RGB = randRGB255(...XYZ);

document.querySelector(
  ".Lab"
).style.backgroundColor = `lab(${Lab[0]} ${Lab[1]} ${Lab[2]})`;

document.querySelector(
  ".XYZ"
).style.backgroundColor = `color(xyz ${XYZ[0]} ${XYZ[1]} ${XYZ[2]})`;

document.querySelector(
  ".RGB"
).style.backgroundColor = `rgb(${RGB[0]} ${RGB[1]} ${RGB[2]})`;
```

#### Note:

Due to differences in color spaces, the values in XYZ and RGB may sometimes be out of their nominal range. However, they can still be displayed without issues in CSS. For example, you may get an XYZ value `[-0.23, 0.47, 0.12]`, since you need to leave the nominal color space to reach the color given by Lab.

### Testing

The package comes with a test suite. Due to the random nature of the output, and sometimes leaving the nominal range (see [note](#note) above), the test suites are not terribly descriptive. Instead, however, they use a volumetric approach, trying to make sure that no outlying randomness can break it.

You can run the tests yourself in the command line by installing vitest with `npm i`, and running all tests with `npm test`

```bash
npm i
npm test
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
