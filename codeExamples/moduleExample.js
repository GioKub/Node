// The following code gives us an example on how to define a module:

// load another dependency
const dependency = require("./anotherModule");
// a private function
function log() {
  console.log(`Well done ${dependency.username}`);
}
// the API to be exported for public use
module.exports.run = () => {
  log();
};
