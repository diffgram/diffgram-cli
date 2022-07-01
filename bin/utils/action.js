const fs = require("fs");
const readModuleFile = require('../tools/readModuleFile')
const replacer = new RegExp('NewName', 'g')

function action({ NewActionName }) { 
    const actionsRootDir = `${process.cwd()}/eventhandlers/action_runners/actions`
    const frontendRootDir = `${process.cwd()}/frontend/src/components/action`

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

    // Create frontend component
    const frontendFileBuffer = readModuleFile("../snippets/NewActionFrontend.txt");
    const frontendTemplate = frontendFileBuffer.toString()
    const frontendSnippet = frontendTemplate.replace(replacer, NewActionName)
    fs.mkdirSync(`${frontendRootDir}/action_configurations/${NewActionName}`)
    fs.writeFileSync(`${frontendRootDir}/action_configurations/${NewActionName}/${NewActionName}.vue`, frontendSnippet);
}

module.exports = action;
