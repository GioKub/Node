###### The reactor pattern

Q. explain what happens in an application using the reactor pattern?
A. 
1. The application generates a new I/O operation by submitting a request to the Event Demultiplexer. The application also specifies a handler, which will be invoked when the operation completes. Submitting a new request to the Event Demultiplexer is a non-blocking call and it immediately returns control to the application.
2. When a set of I/O operations completes, the Event Demultiplexer pushes a set of corresponding events into the Event Queue.
3. At this point, the Event Loop iterates over the items of the Event Queue.
4. For each event, the associated handler is invoked.
5. The handler, which is part of the application code, gives back control to the Event Loop when its execution completes (5a). While the handler executes, it can request new asynchronous operations (5b), causing new items to be added to the Event Demultiplexer (1).
6. When all the items in the Event Queue are processed, the Event Loop blocks again on the Event Demultiplexer, which then triggers another cycle when a new event is available.

###### Libuv, the I/O engine of Node.js

Q. what is Libuv?
A. Libuv is Node.js native library, it makes Node.js compatible with all the major operating systems and normalizes the non-blocking behavior of the different types of resource. (since Each operating system has its own interface for the event demultiplexer: epoll on Linux, kqueue on macOS, and the I/O completion port (IOCP) API on Windows. On top of that, each I/O operation can behave quite differently depending on the type of resource, even within the same operating system. In Unix operating systems, for example, regular filesystem files do not support non-blocking operations, so in order to simulate non blocking behavior, it is necessary to use a separate thread outside the event loop.)
Other than abstracting the underlying system calls, libuv also implements the reactor
pattern, thus providing an API for creating event loops, managing the event queue,
running asynchronous I/O operations, and queuing other types of task.

###### The recipe for Node.js

Q. what are the components of Node.js internal architecture?
A. 
1. Libuv
2. A set of bindings responsible for wrapping and exposing libuv and other
low-level functionalities to JavaScript.
3. V8, the JavaScript engine originally developed by Google for the Chrome
browser. This is one of the reasons why Node.js is so fast and efficient. V8 is
acclaimed for its revolutionary design, its speed, and for its efficient memory
management.
4. A core JavaScript library that implements the high-level Node.js API.