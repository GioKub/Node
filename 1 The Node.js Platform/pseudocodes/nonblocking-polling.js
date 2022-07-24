// The following pseudocode shows you how it's possible to read from multiple resources using non-blocking I/O and an active polling loop:

resources = [socketA, socketB, fileA];
while (!resources.isEmpty()) {
  for (resource of resources) {
    // try to read
    data = resource.read();
    if (data === NO_DATA_AVAILABLE) {
      // there is no data to read at the moment
      continue;
    }
    if (data === RESOURCE_CLOSED) {
      // the resource was closed, remove it from the list
      resources.remove(i);
    } else {
      //some data was received, process it
      consumeData(data);
    }
  }
}
