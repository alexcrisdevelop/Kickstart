const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//delete the build folder if exists
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//read the .sol file from contracts folder
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

//compile both contracts
const output = solc.compile(source, 1).contracts;

//write output to the build directory( separating the contracts); creates the build if not exists
fs.ensureDirSync(buildPath);

for(let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':','') + '.json'),
    output[contract]
  );
}
