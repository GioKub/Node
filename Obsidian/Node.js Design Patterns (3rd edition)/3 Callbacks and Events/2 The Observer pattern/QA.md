###### The Observer pattern

Q. wha is the Observer pattern?
A. The Observer pattern defines an object (called subject) that can notify a set of observers (or listeners) when a change in its state occurs.

Q. what is the difference between callback pattern and observer pattern?
A. The main difference from the Callback pattern is that the subject can actually notify multiple observers, while a traditional CPS callback will usually propagate its result to only one listener, the callback.

###### The EventEmitter

Q. what is the _EventEmitter_?
A. The EventEmitter is a class through which the Observer pattern is available. it allows us to register one or more functions as listeners, which will be invoked when a particular event type is fired.

Q. from which module is EventEmitter exported?
A. The _EventEmitter_ is exported from the _events_ core module.

Q. what does _on(event, listener)_ method of  _EventEmitter_ do?
A. This method allows us to register a new listener (a function) for the given event type (a string). The Observer pattern defines an object (called subject) that can notify a set of observers (or listeners) when a change in its state occurs.

Q. what does _once(event, listener)_ method of  _EventEmitter_ do?
A. This method registers a new listener, which is then removed after the event is emitted for the first time.

Q.  what does _emit(event, [arg1], [...])_ method of  _EventEmitter_ do?
A. This method produces a new event and provides additional arguments to be passed to the listeners.

Q. what does _removeListener(event, listener) method of  _EventEmitter_ do?
A. This method removes a listener for the specified event type.

###### Creating and using the EventEmitter

(section intentionally left blank)

###### Propagating errors

Q. how are errors propagated inside EventEmitter?
A. As with callbacks, the EventEmitter can't just throw an exception when an error condition occurs. Instead, the convention is to emit a special event, called error, and pass an Error object as an argument.

###### Making any object observable

(section intentionally left blank)

###### EventEmitter and memory leaks

Q. what is a memory leak?
A. A memory leak is a software defect whereby memory that is no longer needed is not released, causing the memory usage of an application to grow indefinitely.

###### Synchronous and asynchronous events

Q. When events are emitted asynchronously, can we register new listeners, even after the task that produces the events is triggered?
A. yes, up until the current stack yields to the event loop. This is because the events are guaranteed not to be fired until the next cycle of the event loop, so we can be sure that we won't miss any events

###### EventEmitter versus callbacks

Q. how to decide whether to use an EventEmitter or simply accept a callback when defining an asynchronous API is deciding? .
A. While a deterministic set of rules for you to choose between one style or the other can't be given, here are some hints to help you make a decision on which method to use:
- Callbacks have some limitations when it comes to supporting different types of events. In fact, we can still differentiate between multiple events by passing the type as an argument of the callback, or by accepting several callbacks, one for each supported event. However, this can't exactly be considered an elegant API. In this situation, the EventEmitter can give a better interface and leaner code.
- The EventEmitter should be used when the same event can occur multiple times, or may not occur at all. A callback, in fact, is expected to be invoked exactly once, whether the operation is successful or not. Having a possibly repeating circumstance should make us think again about the semantic nature of the occurrence, which is more similar to an event that has to be communicated, rather than a result to be returned.
-  An API that uses callbacks can notify only one particular callback, while using an EventEmitter allows us to register multiple listeners for the same event.

###### Combining callbacks and events

(section intentionally left blank)