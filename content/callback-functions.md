---
title: JavaScript Callback Functions
date: 2022-06-21
---

Callback functions may not be fun at first, but don’t worry, they won’t kill you.

One of the first topics covered by devs who are learning to write JavaScript is functions. Functions are fairly straightforward for individuals with even the littlest amount of coding experience, but callback functions provide a layer of increased difficulty that many new devs struggle to grasp.

For example, the following is an example of a basic JavaScript function:

        function multiply (a, b) {
            return a * b;
        }

In layman’s terms, this code has defined a function “multiply”. The function “multiply” has two parameters passed through it. Those parameters are a and b.

If one was to call or execute the function using the argument of 4 for a and 5 for b, it would be written as such:

        multiply (4, 5)

This function when run in a console would return the value 20, representing the product of 4 \* 5.

Fairly simple, no?

Callback functions aren’t quite as easy. Here’s an example:

        function multiplyAgain (c, d, callback){
            return callback(c, d);
        }

Remember the parameters here are c, d, and callback. In this case the parameter callback is referring to a function. We can assign our arguments as 10 for c, 8 for d, and our multiply function as the “callback”.

What this function does is run the callback function passing the c and d arguments into that function.

Put simply

        multiplyAgain(8, 10, multiply)

Will return a value of 80.
