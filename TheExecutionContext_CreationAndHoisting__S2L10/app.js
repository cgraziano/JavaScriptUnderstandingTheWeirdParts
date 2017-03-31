
//Because most programming languages call one line at a time (not like java, I think),
//You would expect the next two lines to fail.
//It ran the function b, but did not throw an error for calling a within console, it was simple "undefined?
b();
console.log(a);

var a = 'Hello World!';

function b() {
  console.log('Called b!');
}

//Expect this will work as it does in all programming languages, and it does if you uncomment the next two lines.
//b(); //thinking that this will call the function b.
//console.log(a); //this will call a.