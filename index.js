#!/usr/bin/env node

'use strict';

const parser = require('mri');
const merge = require('fivem-merge');
const args = require('args')
  .option('output', 'The merge destination')
  .option('verbose', 'Enable verbose logging', false)
  .option('lint', 'Lint XML output to be easily readable', true)
  .example('vmerge ./bmw3 ./bmw4 ./18bmw --output ./bmws', 'Merge bmw3, bmw4 and 18bmw into bmws')

const parsed = args.parse(process.argv, {
  name: 'vmerge'
})


const paths = parser(process.argv.slice(2))._;

if (paths.length > 0) {
  
}

if (!parsed.output) {
  console.error('  --output is a required parameter')
  args.showHelp()
  process.exit()
}

merge(paths, {
  verbose: parsed.verbose,
  outputPath: parsed.output,
  lintOutput: parsed.lint,
})