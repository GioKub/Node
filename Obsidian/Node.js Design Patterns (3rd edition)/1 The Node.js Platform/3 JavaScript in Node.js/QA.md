###### JavaScript in Node.js
Q. what are some differences between the JavaScript we use in Node.js and JavaScript we use in the browser?
A. The most obvious difference is that in Node.js we don't have a DOM and we
don't have a window or a document. On the other hand, Node.js has access to a set
of services offered by the underlying operating system that are not available in the
browser. In fact, the browser has to implement a set of safety measures to make sure
that the underlying system is not compromised by a rogue web application. The
browser provides a higher-level abstraction over the operating system resources,
which makes it easier to control and contain the code that runs in it, which will
also inevitably limit its capabilities. In turn, in Node.js we can virtually have access
to all the services exposed by the operating system.

###### Running native code

Q. what are the advantages of Node.js capability of the possibility to create userland modules that can bind to native code, thus allowing us to reuse existing or new components written in C/C++?
A. First of all, it allows us to reuse with little effort a vast amount of existing open source libraries, and most importantly, it allows a company to reuse its own C/C++ legacy code without the need to migrate it. Another important consideration is that native code is still necessary to access low-level features such as communicating with hardware drivers or with hardware ports (for example, USB or serial). Finally, even though V8 is very (very) fast at executing JavaScript, it still has a performance penalty to pay compared to executing native code. In everyday computing, this is rarely an issue, but for CPU-intensive applications, such as those with a lot of data processing and manipulation, delegating the work to native code can make tons of sense.