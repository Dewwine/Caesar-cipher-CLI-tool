const { getAction, getShift, getInputFile, getOutputFile } = require('./getArgs');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
console.log(argv);
function errorHandler(err) {
  if (err) {
    process.stderr.write(err.message + '\n');
    process.exit(1);
  }
}

function checkArgs() {
  if (!getAction(argv)) {
    errorHandler(new Error('there is no required argument: --action'));
  }

  if (getAction(argv) != 'encode' && getAction(argv) != 'decode') {
    errorHandler(new Error('argument --action is not encode or decode'));
  }

  if (!getShift(argv)) {
    errorHandler(new Error('there is no required argument: --shift'));
  }

  if (typeof getShift(argv) != 'number') {
    errorHandler(new Error('argument --shift is NaN'));
  }

  let file = getInputFile(argv);
  if (file) {
    fs.access(file, fs.constants.R_OK, (err) => errorHandler(err));
  }
}

module.exports = { checkArgs };
