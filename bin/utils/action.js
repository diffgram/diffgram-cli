const replacer = new RegExp('NewName', 'g')
const readModuleFile = require('../tools/readModuleFile')

function action({ NewActionName }) {  
    const buffer = readModuleFile("../snippets/NewAction.py.txt");
    const template = buffer.toString()
    const newAction = template.replace(replacer, NewActionName)
    console.log(newAction)
}

module.exports = action;
