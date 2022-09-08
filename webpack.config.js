const path = require('path');

module.exports = {
  entry: './index.js',
  mode: "none",
  output: {
    filename: 'main.js',
    library: {
        type: 'umd',
        name: 'MyLibrary'
    },
    path: path.resolve(__dirname, 'dist'),
  },
//   experiments: {outputModule: true}
};