###### Small core

Q. what is userland (or userspace) ?
A. the ecosystem of modules living outside the core.

Q. why is Node.js principle of keeping the core set of functionalities
to the bare minimum while leaving the rest to the so-called userland (or userspace) convinient? 
it gives freedom to the community to experiment and iterate quickly on a broader set of solutions within the scope of the userland modules, instead of having one slowly evolving solution that is built into the more tightly controlled and stable core.

###### Small modules
Q. what is dependecy hell?
A. situation when installed software packages depend onon specific versions of other software packages

Q. where does Node.js take its' principle of designing smallmodules (and packages), not only in terms of raw code size, but, most importantly, in terms of scope from?
A. This principle has its roots in the Unix philosophy, and particularly in two of its
precepts, which are as follows:
• "Small is beautiful."
• "Make each program do one thing well."

Q. how does Node.js solve dependency hell problem?
A. Node.js helps to solve the dependency hell problem by making sure that two (or more) packages depending on different versions of the same package will use their own installations of such a package, thus avoiding conflicts.

Q. what are the advantages of small modules?
A. 
1. reusable
2. Easier to understand and use
3. Simpler to test and maintain
4. Small in size and perfect for use in the browser

###### Small surface area

Q. how is characteristic of Node.js modules of exposing a minimal set of functionalities to the outside world advantegous?
A. This has the effect of producing an API that is clearer to use and less susceptible to erroneous usage.

Q. how is  characteristic of Node.js modules of being created to be used, rather than extended, by locking down the internals of a module forbidding any possibility of an extension advantegous?
it has the advantage of reducing use cases, simplifying implementation, facilitating maintenance, and increasing usability. In practice, this means preferring to expose functions instead of classes, and being careful not to expose any internals to the outside world.

###### Simplicity and pragmatism
Q. why is designing simple, as opposed to perfect, fully featured software a good practice?
it takes less effort to implement, it allows shipping faster with fewer resources, it's easier to adapt, and, finally, it's easier to maintain and understand.