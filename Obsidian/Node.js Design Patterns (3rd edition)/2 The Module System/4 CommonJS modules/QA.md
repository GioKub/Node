###### CommonJS modules

Q. what is the name of the first module system originally built into Node.js?
A. CommonJS

Q. summarize the two of the main concepts of the CommonJS specification!
A. 
1. _require_ is a function that allows you to import a module from the local
2. _exports_ and _module.exports_ are special variables that can be used to export
filesystem public functionality from the current module

###### A homemade module loader

Q. explain how the code inside require.js works!
A. 
1. A module name is accepted as input, and the very first thing that we do is resolve the full path of the module, which we call id. This task is delegated to require.resolve(), which implements a specific resolving algorithm (we will talk about it later).
2. If the module has already been loaded in the past, it should be available in the cache. If this is the case, we just return it immediately.
3. If the module has never been loaded before, we set up the environment for the first load. In particular, we create a module object that contains an exports property initialized with an empty object literal. This object will be populated by the code of the module to export its public API.
4. After the first load, the module object is cached.
5. The module source code is read from its file and the code is evaluated, as we saw before. We provide the module with the module object that we just created, and a reference to the require() function. The module exports its public API by manipulating or replacing the module.exports object.
6. Finally, the content of module.exports, which represents the public API of the module, is returned to the caller.

###### module.exports versus exports

Q. what is the differnece between using _exports_ and _module.exports_ to expose a
public API?
A. The exports variable is just a reference to the initial value of module.exports. We have seen that such a value is essentially a simple object literal created before the module is loaded. This means that we can only attach new properties to the object referenced by
the exports variable and eeassigning the exports variable doesn't have any effect, because it doesn't change the content of module.exports. It will only reassign the variable itself.

###### The require function is synchronous

Q. is the Node.js require() function syncronous or asyncronous?
A. require() function is synchronous

Q. let's say we need some asynchronous initialization steps for a module, so we defined and exported an uninitialized module that is initialized asynchronously at a later time. what would be the problem with this approach?
A. loading such a module using require() does not guarantee that it's ready to be used

###### The resolving algorithm

Q. what is _dependency hell_?
A. The term dependency hell describes a situation whereby two or more dependencies of a program in turn depend on a shared dependency, but require different incompatible versions

Q. how does Node.js solves this problem?
A. Node.js solves this problem elegantly by loading a different version of a module depending on where the module is loaded from. All the merits of this feature go to the way Node.js package managers (such as npm or yarn) organize the dependencies of the application, and also to the resolving algorithm used in the require() function

Q. explain how the resolving algorithm inside the require() function works?
A. The resolving algorithm can be divided into the following three major branches:
1. File modules: If moduleName starts with /, it is already considered an absolute path to the module and it's returned as it is. If it starts with ./, then moduleName is considered a relative path, which is calculated starting from the directory of the requiring module.
2. Core modules: If moduleName is not prefixed with / or ./, the algorithm will first try to search within the core Node.js modules.
3.  Package modules: If no core module is found matching moduleName, then the search continues by looking for a matching module in the first node_ modules directory that is found navigating up in the directory structure starting from the requiring module. The algorithm continues to search for a match by looking into the next node_modules directory up in the directory tree, until it reaches the root of the filesystem.

Q. in which folders do package managers install the dependencies of each package?
A. The _node\_modules_ directory

###### The module cache

Q. what are some functional implications of caching?
A. 
1. It makes it possible to have cycles within module dependencies
2. It guarantees, to some extent, that the same instance is always returned when requiring the same module from within a given package

Q. which variable exposes the module cache?
A. The module cache is exposed via the _require.cache_ variable

Q. what is the common use case of _require.cache_?
A. A common use case is to invalidate any cached module by deleting the relative key in the require.cache variable, a practice that can be useful during testing but very dangerous if applied in normal circumstances.