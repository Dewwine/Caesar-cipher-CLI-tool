const { checkArgs } = require('./checkArgs');
const { transformationData } = require('./transform');
const { getInputFile, getOutputFile } = require('./getArgs');

checkArgs();
transformationData(getInputFile(), getOutputFile());
