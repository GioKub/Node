###### 1 The revealing module pattern

Q. why does the fact that in the browser every script runs in the global scope problematic?
A. since every script runs in the global scope; therefore, internal application code or third-party dependencies can pollute the scope while exposing their own pieces of functionality. This can be extremely harmful. Imagine, for instance, that a third-party library instantiates a global variable called utils. If any other library, or the application code itself, accidentally overrides or alters utils, the code that relies on it will likely crash in some unpredictable way. Unpredictable side effects can also happen if other libraries or the application code accidentally invoke a function of another library meant for internal use only.

Q. what is revealing module pattern?
A. it's a technique to solve the problems that come with the fact that n the browser every script runs in the global scope

Q. how does revealing module pattern work?
A. This pattern leverages a self-invoking function. This type of function is sometimes also referred to as Immediately Invoked Function Expression (IIFE) and it is used to create a private scope, exporting only the parts that are meant to be public. In JavaScript, variables created inside a function are not accessible from the outer scope (outside the function). Functions can use the return statement to selectively propagate information to the outer scope. This pattern is essentially exploiting these properties to keep the private information hidden and export only a public-facing API.
