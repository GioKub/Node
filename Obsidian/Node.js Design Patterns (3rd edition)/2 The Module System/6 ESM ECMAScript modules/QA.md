###### ESM: ECMAScript modules

Q. what is the most important differentiator between ESM and CommonJS?
A. ES modules are static, which means that imports are described at the top level of every module and outside any control flow statement. Also, the name of the imported modules cannot be dynamically generated at runtime using expressions, only constant strings are allowed.

Q. give one example on benefits that static imports provide?
A. For instance, static imports allow the static analysis of the dependency tree, which allows optimizations such as dead code elimination (tree shaking)

###### Using ESM in Node.js

Q. how do you tell the Node.js interpreter to consider a given module as an ES module rather than a CommonJS module?
A. there are 2 ways:
1. Give the module file the extension .mjs
2. Add to the nearest parent package.json a field called "type" with a value of "module"

###### Named exports and imports

(section intentionally left blank)

###### Default exports and imports

Q. is the nest statemenet "Internally, a default export is equivalent to a named export with default as thename." true?
A. Yes

Q. in ESM can we import the default entity explicitly?
A. No, because the _default_ keyword cannot be used as a variable name

###### Mixed exports

Q. is it possible to mix named exports and a default export within an ES module?
A. Yes

Q. what are the differences between the default export and named exports?
A. 
1. Named exports are explicit. Having predetermined names allows IDEs to support the developer with automatic imports, autocomplete, and refactoring tools. For instance, if we type writeFileSync, the editor might automatically add import { writeFileSync } from 'fs' at the beginning of the current file. Default exports, on the contrary, make all these things more complicated as a given functionality could have different names in different files, so it's harder to make inferences on which module might provide a given functionality based only on a given name.
2. The default export is a convenient mechanism to communicate what is the single most important functionality for a module. Also, from the perspective of the user, it can be easier to import the obvious piece of functionality without having to know the exact name of the binding.
3. In some circumstances, default exports might make it harder to apply dead code elimination (tree shaking). For example, a module could provide only a default export, which is an object where all the functionality is exposed as properties of such an object. When we import this default object, most module bundlers will consider the entire object being used and they won't be able to eliminate any unused code from the exported functionality.

###### Module identifiers

Q. what are Module identifiers (also called module specifiers)?
A. Module identifiers (also called module specifiers) are the different types of values that we can use in our import statements to specify the location of the module we want to load.

Q. list all the Module identifiers (also called module specifiers)
A. 
1. Relative specifiers like ./logger.js or ../logger.js. They are used to refer to a path relative to the location of the importing file.
2. Absolute specifiers like file:///opt/nodejs/config.js. They refer directly and explicitly to a full path. Note that this is the only way with ESM to refer to an absolute path for a module, using a / or a // prefix won't work. This is a significant difference with CommonJS.
3. Bare specifiers are identifiers like fastify or http, and they represent modules available in the node_modules folder and generally installed through a package manager (such as npm) or available as core Node.js modules.
4. Deep import specifiers like fastify/lib/logger.js, which refer to a path within a package in node_modules (fastify, in this case).

###### Async imports

Q. what limitations is _import_ statement subject to because it is static?
A. 
1. module identifier cannot be constructed at runtime
2. Module imports are declared at the top level of every file and they cannot be nested within control flow statements

Q. how does ES modules overcome limitations imposed by the fact that _import_ statement is static?
A. ES modules provides _async imports_ (also called _dynamic imports_)

###### Module loading in depth

(section intentionally left blank)

###### Loading phases

Q. explain the process of how does the interpreter figure out how modules depend on each other and in what order the code needs to be executed using the dependency graph?
A.  this process happens in three separate phases:
1. Construction (or parsing): Find all the imports and recursively load the content of every module from the respective file.
2. Instantiation: For every exported entity, keep a named reference in memory, but don't assign any value just yet. Also, references are created for all the import and export statements tracking the dependency relationship between them (linking). No JavaScript code has been executed at this stage.
3. Evaluation: Node.js finally executes the code so that all the previously instantiated entities can get an actual value. Now running the code from the entry point is possible because all the blanks have been filled.

Q. how is the process of interpreter using the dependency graph to figure out how modules depend on each other and in what order the code needs to be executed in ESM different from this process in CommonJS?
A. Due to its dynamic nature, CommonJS will execute all the files while the dependency graph is explored. every time a new _require_ statement is found, all the previous code has already been executed. This is why we can use _require_ even within if statements or loops, and construct module identifiers from variables.
In ESM, these three phases are totally separate from each other, no code can be executed until the dependency graph has been fully built, and therefore module imports and exports have to be static.

###### Read-only live bindings

Q. what is the difference in how modules are exported and imported between ESM and commonJS?
A. in ES modules imported modules are effectively read-only live bindings to their exported values. meaning that when an entity is imported in the scope, the binding to its original value cannot be changed (read-only binding) unless the bound value changes within the scope of the original module itself (live binding), which is outside the direct control of the consumer code.
This approach is fundamentally different from CommonJS. In fact, in CommonJS, the entire exports object is copied (shallow copy) when required from a module. This means that, if the value of primitive variables like numbers or string is changed at a later time, the requiring module won't be able to see those changes.

###### Circular dependency resolution

(section intentionally left blank, i just didn't know what to ask, study the whole chapter?)

###### Modifying other modules

Q. can we change the default export or named exports of an existing module from another module?
A. No

Q. why wouldn't it work if in the _mock-read-file.js_ we import the _fs_ module with  `import * as fs from 'fs'` or `import { readFile } from 'fs'` ?
A. The reason why using one of the two import statements mentioned above would not work is because our mocking utility is altering only the copy of the readFile() function that is registered inside the object exported as the default export, but not the one available as a named export at the top level of the module.