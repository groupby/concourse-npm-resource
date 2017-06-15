#!/usr/bin/env node

const handle = require('./common').handle;
const available = require('available-versions');
const semverDiff = require('semver-diff');

handle((opts, cb) => {
  const hasVersion = !!opts.version;
  const query = { name: opts.source.package };
  const diff = opts.source.diff;
  if (hasVersion) {
    query.version = opts.version.version;
  }

  available(query)
    .then(({ versions }) => {
      if (hasVersion && versions.length !== 0 &&
        (!diff || semverDiff(ops.version.version, versions[versions.length - 1]) === diff)) {
        return cb(null, [opts.version.version, ...versions]
          .map((version) => ({ version })));
      }
      cb(null, [{ version: versions[versions.length - 1] }])
    })
    .catch((err) => cb(err));
});
