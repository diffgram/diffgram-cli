const fs = require("fs");
const readModuleFile = require('../tools/readModuleFile')
const replacer = new RegExp('NewName', 'g')

function action({ NewActionName }) { 
    const actionsRootDir = `${process.cwd()}/eventhandlers/action_runners/actions`

    // Creating a new action file 
    const actionFileBuffer = readModuleFile("../snippets/NewAction.py.txt");
    const template = actionFileBuffer.toString()
    const newAction = template.replace(replacer, NewActionName)
    fs.writeFileSync(`${actionsRootDir}/${NewActionName}.py`, newAction);

    // Registering action
    const registerFileBuffer = readModuleFile("../snippets/RegisterNewAction.py.txt");
    const registerTemplate = registerFileBuffer.toString()
    const registrationSnippet = registerTemplate.replace(replacer, NewActionName)
    fs.appendFileSync(`${actionsRootDir}/__init__.py`, registrationSnippet);
}

module.exports = action;
