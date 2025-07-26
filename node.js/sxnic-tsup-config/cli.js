module.exports = {
  entry: ['src/cli.ts'],
  format: ['cjs'],
  dts: false,
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  target: 'node16',
  outDir: 'dist',
  external: [],
  treeshake: true,
  bundle: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
};