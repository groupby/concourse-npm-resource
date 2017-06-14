module.exports = {
  handle: (handler) => {
    process.stdin.on('data', (chunk) => {
      try {
        handler(JSON.parse(chunk), (value) => {
          console.log(JSON.stringify(value))
          process.exit(0);
        });
      } catch (e) {
        process.exit(1);
      }
    })
  },
};
