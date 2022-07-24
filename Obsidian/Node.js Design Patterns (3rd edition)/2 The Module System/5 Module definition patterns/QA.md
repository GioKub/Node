###### Named exports

Q. explain how the method of exposing a public API using named exports works?
A. it involves assigning the values we want to make public to properties of the object referenced by exports (or module.exports). In this way, the resulting exported object becomes a container or namespace for a set of related functionalities. The exported functions are then available as properties of the loaded module.

###### Exporting a function

Q. what are the sternghts of module definition pattern which consists of reassigning the
whole module.exports variable to a function and what is another name for it?
A. The main strength of this pattern is the fact that it allows you to expose only a single functionality, which provides a clear entry point for the module, making it simpler to understand and use; it also honors the principle of _small surface area_ very well. This way of defining modules is also known in the community as the __substack pattern__.

###### Exporting a class

Q. what is the differnece between a module that exports a class and a module that exports a function?
A. The difference is that with this new pattern we allow the user to create new instances using the constructor, but we also give them the ability to extend its prototype and forge new classes. exporting a class still provides a single entry point for the module, but compared to the substack pattern, it exposes a lot more of the module internals. On the other hand, it allows much more power when it comes to extending its functionality.

###### Exporting an instance

Q. what are the pros and cons of exporting and instance?
A. This pattern is very much like creating a singleton. However, it does not guarantee the uniqueness of the instance across the entire application, as it happens in the traditional singleton pattern. When analyzing the resolving algorithm, we have seen that a module might be installed multiple times inside the dependency tree of an application. This results in multiple instances of the same logical module, all running in the context of the same Node.js application. One interesting detail of this pattern is that it does not preclude the opportunity to create new instances, even if we are not explicitly exporting the class. In fact, we can rely on the _constructor_ property of the exported instance to construct a new instance of the same type.

###### Modifying other modules or the global scope

Q. what is monkey patching?
A. It generally refers to the practice of modifying the existing objects at runtime to change or extend their behavior or to apply temporary fixes.