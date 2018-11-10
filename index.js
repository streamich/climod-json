#!/usr/bin/env node

const {packageJson} = require('mrm-core');
const argv = require('minimist')(process.argv.slice(2));
const {name} = argv;

// We use "target" here, to be able to use --version flag
// later to print this CLI tool version.
const target = String(argv.target || '*');

if ((typeof name !== 'string') || !name) {
  throw new TypeError('climod-add-dep dependency name not specified.');
} else if (target && (typeof target !== 'string')) {
  throw new TypeError('climod-add-dep dependency version should be a string or ommited.');
}

packageJson().set('dependencies.' + name, target).save();
