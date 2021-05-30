const svgstore = require('svgstore');
const pretty = require('pretty');
const fs = require('fs');

const src = './src/icons';
const dest = './src/components';
const iconFile = 'IconSet.js';
const destFile = dest + '/' + iconFile;
const files = fs.readdirSync(src);

// Create svg store
let sprites = svgstore({
  svgAttrs: {
    'aria-hidden': true,
    style: '{styles}',
  },
});

// Add sprites by icon
files.map((f) => {
  const nameI = 'icon-' + f.replace('.svg', '');
  const pathF = src + '/' + f;

  sprites.add(nameI, fs.readFileSync(pathF, 'utf8'));
});

// Clear Svg Code
let svgCode = sprites.toString();
svgCode = svgCode.split('svg11.dtd">')[1];
svgCode = svgCode.replace('xmlns:xlink', 'xmlnsXlink');
svgCode = svgCode.replace('"{styles}"', '{styles}');
svgCode = pretty(svgCode);

// Generate file set
const replaceStr = '<svg style={styles} />';

fs.readFile('./npm-scripts/template/' + iconFile, 'utf8', (err, data) => {
  if (err) return console.log(err);

  const result = data.replace(replaceStr, svgCode);

  fs.writeFile(destFile, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
