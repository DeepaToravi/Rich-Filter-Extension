// esbuild script — bundles each gadget's source (ui/**/app.js) into static/**/bundle.js
// Each bundle includes @forge/bridge and any other npm imports fully inlined for the browser.
const { build } = require('esbuild');
const path = require('path');

const gadgets = ['controller', 'results', 'chart', 'stats', 'app'];

async function buildAll() {
  for (const gadget of gadgets) {
    await build({
      entryPoints: [path.join('ui', gadget, 'app.js')],
      bundle: true,
      minify: false,
      outfile: path.join('static', gadget, 'bundle.js'),
      platform: 'browser',
      target: ['chrome90'],
      define: { 'process.env.NODE_ENV': '"production"' },
    });
    console.log(`✓ Built ${gadget}`);
  }
  console.log('All gadgets built!');
}

buildAll().catch(err => { console.error(err); process.exit(1); });
