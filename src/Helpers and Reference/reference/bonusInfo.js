/*
not going to paste in a big thing about expressions just go here. same for numbers and strings
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
http://devdocs.io/javascript/global_objects/object/assign


_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
// Object stuff
Enumerating Object Property Methods
// for...in loops
This method traverses all enumerable properties of an object and its prototype chain
// Object.keys(o)
This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.
// Object.getOwnPropertyNames(o)
This method returns an array containing all own properties' names (enumerable or not) of an object o.
//Before ECMAScript 5, there was no native way to list all properties of an object. However, this can be achieved with the following function:
function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	return result; 
}
This can be useful to reveal "hidden" properties (properties in the prototype chain which are not accessible through the object, because another property has the same name earlier in the prototype chain). Listing accessible properties only can easily be done by removing duplicates in the array.



// The following statement creates an object and assigns it to the variable x if and only if the expression cond is true:

  if (cond) var x = {greeting: 'hi there'};

// The following example creates myHonda with three properties. Note that the engine property is also an object with its own properties.

  var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};

Using the Object.create method
Objects can also be created using the Object.create() method. This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.

// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes

  _____________________________________________________________________
This is part of objects

Defining getters and setters
A getter is a method that gets the value of a specific property. A setter is a method that sets the value of a specific property. You can define getters and setters on any predefined core object or user-defined object that supports the addition of new properties. The syntax for defining getters and setters uses the object literal syntax.

The following illustrates how getters and setters could work for a user-defined object o.

var o = {
  a: 7,
  get b() { 
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25
The o object's properties are:

o.a — a number
o.b — a getter that returns o.a plus 1
o.c — a setter that sets the value of o.a to half of the value o.c is being set to
Please note that function names of getters and setters defined in an object literal using "[gs]et property()" (as opposed to __define[GS]etter__ ) are not the names of the getters themselves, even though the [gs]et propertyName(){ } syntax may mislead you to think otherwise. To name a function in a getter or setter using the "[gs]et property()" syntax, define an explicitly named function programmatically using Object.defineProperty (or the Object.prototype.__defineGetter__ legacy fallback).

The following code illustrates how getters and setters can extend the Date prototype to add a year property to all instances of the predefined Date class. It uses the Date class's existing getFullYear and setFullYear methods to support the year property's getter and setter.

These statements define a getter and setter for the year property:

var d = Date.prototype;
Object.defineProperty(d, 'year', {
  get: function() { return this.getFullYear(); },
  set: function(y) { this.setFullYear(y); }
});
These statements use the getter and setter in a Date object:

var now = new Date();
console.log(now.year); // 2000
now.year = 2001; // 987617605170
console.log(now);
// Wed Apr 18 11:13:25 GMT-0700 (Pacific Daylight Time) 2001
In principle, getters and setters can be either

defined using object initializers, or
added later to any object at any time using a getter or setter adding method.
When defining getters and setters using object initializers all you need to do is to prefix a getter method with get and a setter method with set. Of course, the getter method must not expect a parameter, while the setter method expects exactly one parameter (the new value to set). For instance:

var o = {
  a: 7,
  get b() { return this.a + 1; },
  set c(x) { this.a = x / 2; }
};
Getters and setters can also be added to an object at any time after creation using the Object.defineProperties method. This method's first parameter is the object on which you want to define the getter or setter. The second parameter is an object whose property names are the getter or setter names, and whose property values are objects for defining the getter or setter functions. Here's an example that defines the same getter and setter used in the previous example:

var o = { a: 0 };

Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b); // Runs the getter, which yields a + 1 or 6
Which of the two forms to choose depends on your programming style and task at hand. If you already go for the object initializer when defining a prototype you will probably most of the time choose the first form. This form is more compact and natural. However, if you need to add getters and setters later — because you did not write the prototype or particular object — then the second form is the only possible form. The second form probably best represents the dynamic nature of JavaScript — but it can make the code hard to read and understand.


_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
// Spread properties
// The Rest/Spread Properties for ECMAScript proposal (stage 3) adds spread properties to object literals. It copies own enumerable properties from a provided object onto a new object.
// Shallow-cloning (excluding prototype) or merging objects is now possible using a shorter syntax than Object.assign().

// var obj1 = { foo: 'bar', x: 42 };
// var obj2 = { foo: 'baz', y: 13 };

// var clonedObj = { ...obj1 };
// // Object { foo: "bar", x: 42 }

// var mergedObj = { ...obj1, ...obj2 };
// // Object { foo: "baz", x: 42, y: 13 }


_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Default Parameters

function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5

Alternative default 

function Engineer(name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, 'engineering', projs);
  this.machine = mach || '';
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters sket might like this idk
// he might've wanted object.create though

_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
// Functions

Lexical this
Until arrow functions, every new function defined its own this value (a new object in case of a constructor, undefined in strict mode function calls, the context object if the function is called as an "object method", etc.). This proved to be annoying with an object-oriented style of programming.

function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();
In ECMAScript 3/5, this issue was fixed by assigning the value in this to a variable that could be closed over.

function Person() {
  var self = this; // Some choose `that` instead of `self`. 
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
Alternatively, a bound function could be created so that the proper this value would be passed to the growUp() function.

Arrow functions capture the this value of the enclosing context, so the following code works as expected.

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();

Rest parameters
The rest parameter syntax allows us to represent an indefinite number of arguments as an array. In the example, we use the rest parameters to collect arguments from the second one to the end. We then multiply them by the first one. This example is using an arrow function, which is introduced in the next section.

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Special Characters

Table: JavaScript special characters
Character	Meaning
\0	Null Byte
\b	Backspace
\f	Form feed
\n	New line
\r	Carriage return
\t	Tab
\v	Vertical tab
\'	Apostrophe or single quote
\"	Double quote
\\	Backslash character
\XXX	The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377. For example, \251 is the octal sequence for the copyright symbol.
\xXX	The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF. For example, \xA9 is the hexadecimal sequence for the copyright symbol.
\uXXXX	The Unicode character specified by the four hexadecimal digits XXXX. For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.
\u{XXXXX}	Unicode code point escapes. For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.

*/