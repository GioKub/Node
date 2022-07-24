// /The following pseudocode shows a typical blocking thread performed against a socket:

// blocks the thread until the data is available
data = socket.read()
// data is available
print(data)