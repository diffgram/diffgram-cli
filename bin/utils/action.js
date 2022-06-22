const fs = require("fs");
const replacer = new RegExp('NewName', 'g')

function action({ NewActionName }) {  
    const buffer = fs.readFileSync("./bin/snippets/NewAction.py.txt");
    const template = buffer.toString()
    const newAction = template.replace(replacer, NewActionName)
}

module.exports = action;
