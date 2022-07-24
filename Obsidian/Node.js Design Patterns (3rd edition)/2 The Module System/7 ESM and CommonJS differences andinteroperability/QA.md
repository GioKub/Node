###### ESM runs in strict mode

A. which module system between ESM and commonJS runs in strict mode?
Q. ESM

###### Missing references in ESM

Q. what are the list of references that are defined in CommonJS but not in ESM?
require, exports, module.exports, \_\_filename, and \_\_dirname.

Q. what do \_\_filename and \_\_dirname  represent in CommonJS?
A. \_\_filename and \_\_dirname represent the absolute path to the current module file and the absolute path to its parent folder.

Q. since \_\_filename and \_\_dirname are not defined in ESM then give example on how is it possible to get a reference to the current file URL?
A. using the special object import.meta. Specifically, import.meta.url is a reference to the current module file in a format similar to file:///path/to/current_module.js

Q. how is behaviour of _this_ keyword differnet in ESM and CommonJS?
A. In the global scope of an ES module, _this_ is undefined, while in CommonJS, this is
a reference to _exports_

###### Interoperability

Q. is it possible to import ES modules from CommonJS modules?
A. No

Q. is it possible to import JSON files directly as modules in ESM?
A. No