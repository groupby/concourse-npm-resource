const handle = require('./common').handle;
const RegClient = require('npm-registry-client');

const client = new RegClient({ isFromCI: true });
const uri = "https://registry.npmjs.org/npm"

handle((opts, done) => {

  client.distTags.fetch(uri, { package: '@storefront/core' }, () => {

    done([]);
  });
});
