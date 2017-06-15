module.exports = {
  handle: (handler) =>
    process.stdin.on('data', (chunk) => {
      try {
        handler(JSON.parse(chunk), (err, value) => {
          if (err) {
            handleError(err);
          } else {
            console.log(JSON.stringify(value));
            process.exit(0);
          }
        });
      } catch (err) {
        handleError(err);
      }
    }),
};

function handleError(err) {
  console.error(JSON.stringify(err));
  process.exit(1);
}
