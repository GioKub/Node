###### The reactor pattern

A Node.js application will exit when there are no more pending
operations in the event demultiplexer, and no more events to be
processed inside the event queue.

The reactor pattern handles I/O by blocking until new events are available from a set of observed resources, and then reacts by dispatching each event to an associated handler.