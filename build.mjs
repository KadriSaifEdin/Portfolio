// Bundles src/ with esbuild into dist/ and copies index.html + public/.
import { build, context } from 'esbuild';
import { cpSync, mkdirSync, rmSync } from 'node:fs';

const watch = process.argv.includes('--watch');
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/assets', { recursive: true });
cpSync('public', 'dist', { recursive: true });
cpSync('index.html', 'dist/index.html');

const opts = {
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outdir: 'dist/assets',
  entryNames: 'app',
  jsx: 'automatic',
  minify: !watch,
  sourcemap: watch,
  target: 'es2020',
  loader: { '.css': 'css' },
  define: { 'process.env.NODE_ENV': watch ? '"development"' : '"production"' },
};
if (watch) { const c = await context(opts); await c.watch(); console.log('watching…'); }
else { await build(opts); console.log('built → dist/'); }
