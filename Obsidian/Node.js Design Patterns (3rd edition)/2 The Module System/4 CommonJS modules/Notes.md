###### Defining a module

The essential concept to remember is that everything inside a module is private
unless it's assigned to the module.exports variable. The content of this variable is
then cached and returned when the module is loaded using require().

###### The resolving algorithm

For file and package modules, both files and directories can match moduleName. In
particular, the algorithm will try to match the following:
• /<moduleName/>.js
• /<moduleName/>/index.js
• The directory/file specified in the main property of /<moduleName/>/package.json


The resolving algorithm is applied transparently for us when we
invoke require(). However, if needed, it can still be used directly
by any module by simply invoking require.resolve().

###### Circular dependencies

in CommonJS different parts of our application will have a different view of what is exported by module a.js and module b.js, depending on the order in which those dependencies are loaded. While both the modules are completely initialized as soon as they are required from the module main.js, the a.js module will be incomplete when it is loaded from b.js. In particular, its state will be the one that it reached the moment b.js was required.