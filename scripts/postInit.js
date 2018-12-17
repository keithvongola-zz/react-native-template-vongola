const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

function installDevDependencies() {
  console.log('Adding dev dependencies for the project...');

  const devDependenciesJsonPath = path.resolve('devDependencies.json');
  const devDependencies = JSON.parse(fs.readFileSync(devDependenciesJsonPath));

  for (let depName in devDependencies) {
    const depVersion = devDependencies[depName];
    const depToInstall = depName + '@' + depVersion;
    console.log('Adding ' + depToInstall + '...');
    execSync(`npm i -s ${depToInstall}`, {stdio: 'inherit'});
  }
}

function cleanup() {
  const devDependenciesJsonPath = path.resolve('devDependencies.json');
  fs.unlink(devDependenciesJsonPath);
}

function postTemplateInit() {
  installDevDependencies();
  cleanup();
}

postTemplateInit();