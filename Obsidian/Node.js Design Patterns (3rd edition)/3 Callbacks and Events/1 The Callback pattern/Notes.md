###### Using synchronous APIs

There is no reason for a function to have a CPS if it is synchronous. In fact, it is always best practice to implement a synchronous API using a direct style. This will eliminate any confusion around its nature and will also be more efficient from a performance perspective.

Pattern - Use blocking APIs sparingly and only when they don't affect the ability of the application to handle concurrent asynchronous operations.

###### Guaranteeing asynchronicity with deferred execution

Pattern -  You can guarantee that a callback is invoked asynchronously by deferring its execution using process.nextTick().