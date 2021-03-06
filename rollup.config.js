import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import styles from 'rollup-plugin-styles';

import pkg from './package.json';

export default {
  input: pkg.source,
  output: [{ file: pkg.main, format: 'esm' }],
  plugins: [
    styles({ mode: 'inject' }),
    external(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    del({ targets: ['dist/*'] }),
  ],
};
