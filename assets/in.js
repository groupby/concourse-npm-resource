#!/usr/bin/env node

const available = require('available-versions');
const fs = require('fs');
const path = require('path');
const handle = require('./common').handle;

handle((opts, cb) => {
  const directory = process.argv[2];
  const version = opts.version.version;

  fs.writeFile(path.join(directory, 'version'), version, (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null, { version: { version } });
    }
  });
});
