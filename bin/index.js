#!/usr/bin/env node
const yargs = require("yargs")
const create_action = require('./utils/action')
const create_dev_container = require('./utils/container')

const usage = "\nDiffgram CLI:";
const options = yargs
    .usage(usage)
    .command('action [NewActionName]', 'Creates a new Diffgram action', (yargs) => {
        yargs.positional('NewActionName', {
          type: 'string',
          describe: 'Name of your new Diffgram action'
        })
      }, create_action)
    .command('compose', 'Creates a docker-compose file for development environment', create_dev_container)
    .help(true)
    .argv;
