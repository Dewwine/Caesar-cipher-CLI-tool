const { getAction, getShift } = require('./getArgs');
const { cryptAction } = require('./caesar');
const stream = require('stream');

const coder = new stream.Transform({ objectMode: true });

coder._transform = function (chunk, encoding, done) {
  try {
    done(null, cryptAction(chunk.toString(), getAction(), getShift()));
  } catch (e) {
    done(e);
  }
};

module.exports = { coder };
