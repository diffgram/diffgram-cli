const fs = require("fs");
const readModuleFile = require('../tools/readModuleFile')

function secrets() { 
    const secretsDir = `${process.cwd()}/shared/settings/secrets.py`
    const secretsFileBuffer = readModuleFile("../snippets/secrets.py.txt");
    const template = secretsFileBuffer.toString()
    fs.writeFileSync(secretsDir, template);
}

module.exports = secrets;