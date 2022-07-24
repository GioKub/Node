###### Named exports and imports

Note that ESM uses the singular word export as opposed to the
plural (exports and module.exports) used by CommonJS

###### Named exports and imports

It's very important to note that, as opposed to CommonJS, with
ESM we have to specify the file extension of the imported modules.
With CommonJS we can use either ./logger or ./logger.js,
with ESM we are forced to use ./logger.js.

###### Loading phases

In generic terms, a dependency graph can be defined as a directed graph (nodejsdp.link/directed-graph) representing the dependencies of a group of objects. In the context of this section, when we refer to a dependency graph, we want to indicate the dependency relationship between ECMAScript modules. As we will see, using a dependency graph allows us to determine the order in which all the necessary modules should be loaded in a given project.

###### Modifying other modules

Note that syncBuiltinESMExports() works only for built-in Node.js modules like the fs module in our example.