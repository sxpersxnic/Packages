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
  external: ['react', 'react-dom'],
  treeshake: true,
  bundle: true,
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
};