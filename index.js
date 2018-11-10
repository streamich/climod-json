#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const NAME = 'climod-json';

if (argv.v || argv.version) {
  console.log(require('./package.json').version);
  process.exit(0);
} else if (argv.h || argv.help) {
  console.log(`${NAME}

Installation

    npm i -g ${NAME}

Usage

    ${NAME} --file package.json --key license --set MIT

Options
    -f, --file         JSON file which to mutate.
    -k, --key         JSON key on which to perform operation.
    -s, --set         Value to set the key to.
    -u, --unset       To unset given key.
    --json            To JSON.strigify console output.
    -h, --help        Print this screen.
    -v, --version     Show version.
`);
  process.exit(0);
}

const file = argv.file || argv.f;
if ((typeof file !== 'string') || !file) {
  throw new TypeError(`${NAME} file path not specified, use -f or --file options.`);
}

const key = argv.key || argv.k;
if ((typeof key !== 'string') || !key) {
  throw new TypeError(`${NAME} key path not specified, use -k or --key options.`);
}

const {json} = require('mrm-core');
const obj = json(file);

if (argv.set || argv.s) {
  obj.set(key, argv.set || argv.s).save();
  process.exit(0);
} else if (argv.u || argv.unset) {
  obj.unset(key).save();
  process.exit(0);
} else {
  const value = obj.get(key);
  console.log(argv.json ? JSON.stringify(value) : value);
  process.exit(0);
}
