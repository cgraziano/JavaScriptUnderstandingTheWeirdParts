//Global object and the variable 'this' were created, eventhough no code was written.
//In the devtool in chrome, type, "this" and you will get a response. (the globabl object is window, which is the same as 'this"
//variable not inside a function are global.

//All this code is not inside a function, so it is global. a and b were attached to the global object
var a = "Hello World!";

function b() {
  
}

//Summary
//When your javascriipt code is executed, a execution context is created.
//At the base level (not inside a function), javascript engine creates for you a global object, if you are running
//code inside a browser, that global object is the window object.
//'this' at the globabl level is equal to the window object.
//You also get a link to the outer environment, but because you are already at the global level, the outer environment is null.
//Variables and functions will sit on the global object if you are writing global code.


