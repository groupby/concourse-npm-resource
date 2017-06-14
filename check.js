#!/usr/bin/env node

const handle = require('./common').handle;
const available = require('available-versions');

handle((opts, cb) => {
  const hasVersion = !!opts.version;
  const query = { name: opts.source.package };
  if (hasVersion) {
    query.version = opts.version.version;
  }

  available(query)
    .then((res) => {
      if (hasVersion) {
        cb(null, [opts.version.version, ...res.versions].map((version) => ({ version })));
      } else {
        cb(null, [{ version: res.versions[res.versions.length - 1] }])
      }
    })
    .catch((err) => cb(err));
});
