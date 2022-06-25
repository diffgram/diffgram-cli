#!/usr/bin/env node
const yargs = require("yargs")
const createAction = require('./utils/action')
const createDevContainer = require('./utils/container')
const dirChecker = require('./tools/dirChecker')

dirChecker()
  
yargs
  .usage("\nDiffgram CLI:")
  .command('action [NewActionName]', 'Creates a new Diffgram action', (yargs) => {
      yargs.positional('NewActionName', {
        type: 'string',
        describe: 'Name of your new Diffgram action'
      })
    }, createAction)
  .command('compose', 'Creates a docker-compose file for development environment', createDevContainer)
  .help(true)
  .argv;
