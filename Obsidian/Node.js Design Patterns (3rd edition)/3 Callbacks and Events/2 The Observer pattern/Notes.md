###### Propagating errors

The EventEmitter treats the error event in a special way. It will
automatically throw an exception and exit from the application if
such an event is emitted and no associated listener is found. For
this reason, it is recommended to always register a listener for
the error event.

###### EventEmitter and memory leaks

We can use the convenience method once(event, listener)
in place of on(event, listener) to automatically unregister
a listener after the event is received for the first time. However,
be advised that if the event we specify is never emitted, then the
listener is never released, causing a memory leak.

###### Synchronous and asynchronous events

The emission of synchronous events can be deferred with
process.nextTick() to guarantee that they are emitted
asynchronously.

###### Combining callbacks and events

The EventEmitter can also be combined with other asynchronous
mechanisms such as promises. In this case, just return an object (or array) containing both the promise and the EventEmitter. This object can then be destructured by the caller, like this: {promise, events} = foo().