// The following is the pseudocode of an algorithm that uses a generic synchronous event demultiplexer to read from two different resources:

watchedList.add(socketA, FOR_READ); // (1)
watchedList.add(fileB, FOR_READ);
while ((events = demultiplexer.watch(watchedList))) {
  // (2)
  // event loop
  for (event of events) {
    // (3)
    // This read will never block and will always return data
    data = event.resource.read();
    if (data === RESOURCE_CLOSED) {
      // the resource was closed, remove it from the watched list
      demultiplexer.unwatch(event.resource);
    } else {
      // some actual data was received, process it
      consumeData(data);
    }
  }
}
