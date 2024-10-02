const path = require('node:path');
const moduleAlias = require('module-alias');

const projectFolders = ['backend', 'frontend'];

const handleAliasReference = () => {
  const argv = process.argv;
  const target = argv[argv.length - 1];
  const isDefault = target === `${__filename}`;

  const buildFolderName = '__build__';
  const isProduction = process.env.NODE_ENV === 'production';
  const relativeBasePath = isProduction ? `./${buildFolderName}` : '.';

  if (isProduction) {
    const tsConfig = require('./tsconfig.base.json');
    const alias = {};

    for (const key in tsConfig.compilerOptions.paths) {
      alias[key.replace('/*', '')] = path.resolve(__dirname, tsConfig.compilerOptions.paths[key][0].replace('/*', ''));
    }

    moduleAlias.addAliases(alias);
  } else {
    require('tsconfig-paths/register');
  }

  if (isDefault) {
    for (let folderName of projectFolders) {
      const extension = isProduction ? 'js' : 'ts';
      const relativeProjectPath = `./${relativeBasePath}/${folderName}/index.${extension}`;

      require(relativeProjectPath);
    }
  } else {
    const relativeProjectPath = `${relativeBasePath}/${target}`;
    console.log('else', relativeProjectPath);
    require(relativeProjectPath);
  }
};

handleAliasReference();