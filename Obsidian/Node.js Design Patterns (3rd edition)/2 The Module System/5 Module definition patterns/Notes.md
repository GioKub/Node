###### Modifying other modules or the global scope
module can modify the global scope and any object in it, including other modules in the cache.

If you want a real-life example of how this can be useful, have
a look at nock (nodejsdp.link/nock), a module that allows you
to mock HTTP responses in your tests. The way nock works is
by monkey patching the Node.js http module and by changing
its behavior so that it will provide the mocked response rather
than issuing a real HTTP request. This allows our unit test to run
without hitting the actual production HTTP endpoints, something
that's very convenient when writing tests for code that relies on
third-party APIs.