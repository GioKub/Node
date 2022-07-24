//The code that follows creates a function that mimics a subset of the functionality of the original require() function of Node.js.
function loadModule(filename, module, require) {
  const wrappedSrc = `(function (module, exports, require) {
    ${fs.readFileSync(filename, "utf8")}
    })(module, module.exports, require)`;
  eval(wrappedSrc);
}
