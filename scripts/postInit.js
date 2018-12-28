const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

function installDevDependencies() {
  console.log('Adding dev dependencies for the project...');

  const devDependenciesJsonPath = path.resolve('devDependencies.json');
  const devDependencies = JSON.parse(fs.readFileSync(devDependenciesJsonPath));

  for (const depName in devDependencies) {
    const depVersion = devDependencies[depName];
    const depToInstall = `${depName}@${depVersion}`;
    console.log(`Adding ${depToInstall}...`);
    execSync(`npm i --save-dev ${depToInstall}`, { stdio: 'inherit' });
  }
}

function cleanup() {
  const fileToDelete = [
    path.resolve('devDependencies.json'),
    path.resolve('App.js'),
    path.resolve('scripts/postInit.js'),
  ];

  fileToDelete.forEach((filePath) => {
    fs.unlink(filePath, e => console.log(e));
  });

  const scriptsPath = path.resolve('scripts');
  fs.rmdir(scriptsPath, e => console.log(e));
}

function postTemplateInit() {
  installDevDependencies();
  cleanup();
}

postTemplateInit();
