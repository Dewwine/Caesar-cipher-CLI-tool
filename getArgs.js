const argv = require('minimist')(process.argv.slice(2));

const ACTION = ['action', 'a'];
const SHIFT = ['shift', 's'];
const INPUT = ['input', 'i'];
const OUTPUT = ['output', 'o'];

function getAction() {
  return argv[ACTION[0]] || argv[ACTION[1]];
}

function getShift() {
  return argv[SHIFT[0]] || argv[SHIFT[1]];
}

function getInputFile() {
  return argv[INPUT[0]] || argv[INPUT[1]];
}

function getOutputFile() {
  return argv[OUTPUT[0]] || argv[OUTPUT[1]];
}

module.exports = {
  getAction,
  getShift,
  getInputFile,
  getOutputFile,
};
