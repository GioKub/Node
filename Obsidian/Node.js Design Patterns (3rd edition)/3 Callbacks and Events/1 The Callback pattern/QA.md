###### The Callback pattern

Q. what are Callbacks?
A. Callbacks are functions that are invoked to propagate the result of an operation

Q. what makes JavaScript the ideal language for callbacks?
A. in Javascript all functions are first-class objects and can be easily assigned to variables, passed as arguments, returned from another function invocation, or stored in data structures.

Q. what makes closures an ideal construct for implementing callbacks?
A. With closures, we can reference the environment in which a function was created; this way, we can always maintain the context in which the asynchronous operation was requested, no matter when or where its callback is invoked.

###### The continuation-passing style

Q. what is a callback?
A. In JavaScript, a callback is a function that is passed as an argument to another function and is invoked with the result when the operation completes.

Q. what is the way of propagating result by passing function as an argument to another function which gets invoked with the result when the operation completes called in functional programming?
A. In functional programming, this way of propagating the result is called continuation-passing style (CPS)

###### Synchronous CPS

(section intentionally left blank)

###### Asynchronous CPS

Q. what is the difference between synchronous and an asynchronous function?
A. synchronous function blocks until it completes its operations. An asynchronous function returns immediately, and its result is passed to a handler at a later cycle of the event loop

###### Non-CPS callbacks

(section intentionally left blank)

###### Synchronous or asynchronous?

(section intentionally left blank)

###### An unpredictable function

(section intentionally left blank)

###### Unleashing Zalgo

Q. in the code that is given as example, why does the callback of the second reader never invoked?
A. 
- During the creation of reader1, our inconsistentRead() function behaves asynchronously because there is no cached result available. This means that any onDataReady listener will be invoked later in another cycle of the event loop, so we have all the time we need to register our listener.
- Then, reader2 is created in a cycle of the event loop in which the cache for the requested file already exists. In this case, the inner call to inconsistentRead() will be synchronous. So, its callback will be invoked immediately, which means that all the listeners of reader2 will be invoked synchronously as well. However, we are registering the listener after the creation of reader2, so it will never be invoked.

###### Using synchronous APIs

(section intentionally left blank)

###### Guaranteeing asynchronicity with deferred execution

Q. how does _process.nextTick()_ work?
A. process.nextTick()  defers the execution of a function after the currently running operation completes. Its functionality is very simple: it takes a callback as an argument and pushes it to the top of the event queue, in front of any pending I/O event, and returns immediately. The callback will then be invoked as soon as the currently running operation yields control back to the event loop.

Q. what are microtasks?
A. Callbacks deferred with process.nextTick() are called microtasks and they are executed just after the current operation completes, even before any other I/O event is fired.

Q. what is the difference between _process.nextTick()_ and _setImmediate()_?
A. Callbacks deferred with process.nextTick() are called microtasks and they are executed just after the current operation completes, even before any other I/O event is fired. With setImmediate(), on the other hand, the execution is queued in an event loop phase that comes after all I/O events have been processed. Since process.nextTick() runs before any already scheduled I/O, it will be executed faster, but under certain circumstances, it might also delay the running of any I/O callback indefinitely (also known as I/O starvation), such as in the presence of a recursive invocation. This can never happen with setImmediate().

Q. what is the differnece between _setTimeout(callback, 0)_ and _setImmediate()_?
A. Using setTimeout(callback, 0) has a behavior comparable to that of setImmediate(), but in typical circumstances, callbacks scheduled with setImmediate() are executed faster than those scheduled with setTimeout(callback, 0). To see why, we have to consider that the event loop executes all the callbacks in different phases; for the type of events we are considering, we have timers (setTimeout()) that are executed before I/O callbacks, which are, in turn, executed before setImmediate() callbacks. This means that if we queue a task with setImmediate() in a setTimeout() callback, in an I/O callback, or in a microtask queued after these two phases, then the callback will be executed in a phase that comes right after the phase we are currently in. setTimeout() callbacks have to wait for the next cycle of the event loop.

###### Node.js callback conventions

(section intentionally left blank)

###### The callback comes last

Q. as the standard convention, when a function accepts a callback as input at which place should it be passed as arugement? first, middle, last?
A. In all core Node.js functions, the standard convention is that when a function accepts a callback as input, this has to be passed as the last argument.

###### Any error always comes first

Q. how are errors propagated in CPS?
A. In CPS, errors are propagated like any other type of result, which means using callbacks. In Node.js, any error produced by a CPS function is always passed as the first argument of the callback, and any actual result is passed starting from the second argument. If the operation succeeds without errors, the first argument will be null or undefined.

###### Propagating errors

Q. how do you propagate errors in synchronous, direct style functions?
A. Propagating errors in synchronous, direct style functions is done with the wellknown throw statement, which causes the error to jump up in the call stack until it is caught.

Q. how are errors propagated in asynchronous CPS?
A. In asynchronous CPS, however, proper error propagation is done by simply passing the error to the next callback in the chain.

###### Uncaught exceptions

Q. what is fail-fast approach?
A. It's important to understand that an uncaught exception leaves the application in a state that is not guaranteed to be consistent, which can lead to unforeseeable problems. For example, there might still be incomplete I/O requests running or closures might have become inconsistent. That's why it is always advised, especially in production, to never leave the application running after an uncaught exception is received. Instead, the process should exit immediately, optionally after having run some necessary cleanup tasks, and ideally, a supervising process should restart the application. This is also known as the fail-fast approach and it's the recommended practice in Node.js.