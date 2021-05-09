const { getAction, getShift, getInputFile, getOutputFile } = require('./getArgs');
const fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

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
    errorHandler(new Error('argumet --action is not encode or decode'));
  }

  if (!getShift(argv)) {
    errorHandler(new Error('there is no required argument: --shift'));
  }

  let file = getInputFile(argv);
  if (file) {
    fs.access(file, fs.constants.R_OK, (err) => errorHandler(err));
  }

  file = getOutputFile(argv);
  if (file) {
    fs.access(file, fs.constants.W_OK, (err) => errorHandler(err));
  }
}

module.exports = { checkArgs };
