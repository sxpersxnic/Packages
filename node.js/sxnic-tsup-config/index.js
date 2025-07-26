module.exports = {
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  target: 'es2022',
  outDir: 'dist',
  external: [],
  treeshake: true,
  bundle: true,
};