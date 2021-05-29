const path = require('path')

module.exports = {
  componentsRoot: './',
  components: '{src,exemplos}/**/*.{vue,js,jsx,ts,tsx}',
  outDir: 'documentation',
  docsRepo: 'albreis/vuedar',
  docsBranch: 'master',
  docsFolder: 'documentation',
  editLinkLabel: 'Algo errado? Avise-nos!',
  getDocFileName: (componentPath) => componentPath.replace(/\.vue$/, '.md'),
  getDestFile: (file, config) => path.join(config.outDir, file).replace(/\.vue$/, '.md'),
}