import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import node from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

let pkg = require('./package.json');
const outputFile = 'dist/output.js';

let externalPackages = [ 'react' ];
let globalPackages = { 'react': 'React' };

let config = {
  input: 'index.js',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    node(),
    commonjs()
  ],
  external: externalPackages,
  globals: globalPackages,
  output: [{
    format: 'umd',
    file: outputFile
  }],
  name: 'Marquee',
  sourcemap: true
};

export default config;