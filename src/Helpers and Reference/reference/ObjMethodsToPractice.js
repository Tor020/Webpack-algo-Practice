/*

// Methods of the Object constructor

Object.assign()                                Copies the values of all enumerable own properties from one or more source objects to a target object.
Object.create()                                Creates a new object with the specified prototype object and properties.
Object.defineProperty()                        Adds the named property described by a given descriptor to an object.
Object.defineProperties()                      Adds the named properties described by the given descriptors to an object.
Object.entries()                               Returns an array of a given object's own enumerable property [key, value] pairs.
Object.freeze()                                Freezes an object: other code can't delete or change any properties.
Object.getOwnPropertyDescriptor()              Returns a property descriptor for a named property on an object.
Object.getOwnPropertyDescriptors()             Returns an object containing all own property descriptors for an object.
Object.getOwnPropertyNames()                   Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols()                 Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf()                        Returns the prototype of the specified object.
Object.is()                                    Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
Object.isExtensible()                          Determines if extending of an object is allowed.
Object.isFrozen()                              Determines if an object was frozen.
Object.isSealed()                              Determines if an object is sealed.
Object.keys()                                  Returns an array containing the names of all of the given object's own enumerable properties.
Object.preventExtensions()                     Prevents any extensions of an object.
Object.seal()                                  Prevents other code from deleting properties of an object.
Object.setPrototypeOf()                        Sets the prototype (i.e., the internal [[Prototype]] property)
Object.values()                                Returns an array of a given object's own enumerable values.

Methods
Object.prototype.__defineGetter__()                       Associates a function with a property that, when accessed, executes that function and returns its return value.
Object.prototype.__defineSetter__()                       Associates a function with a property that, when set, executes that function which modifies the property.
Object.prototype.__lookupGetter__()                       Returns the function associated with the specified property by the __defineGetter__() method.
Object.prototype.__lookupSetter__()                       Returns the function associated with the specified property by the __defineSetter__() method.
Object.prototype.hasOwnProperty()                         Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
Object.prototype.isPrototypeOf()                          Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
Object.prototype.propertyIsEnumerable()                   Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
Object.prototype.toSource()                               Returns string containing the source of an object literal representing the object that this method is called upon; you can use this value to create a new object.
Object.prototype.toLocaleString()                         Calls toString().
Object.prototype.toString()                               Returns a string representation of the object.
Object.prototype.unwatch()                                Removes a watchpoint from a property of the object.
Object.prototype.valueOf()                                Returns the primitive value of the specified object.
Object.prototype.watch()                                  Adds a watchpoint to a property of the object.
Object.prototype.eval()                                   Used to evaluate a string of JavaScript code in the context of the specified object, but has been removed.

Deleting a property from an object
There isn't any method in an Object itself to delete its own properties (e.g. like Map.prototype.delete()). To do so one has to use the delete operator.
//Delete operator 
  delete object.property
  delete object['property']


Description
Unlike what common belief suggests, the delete operator has nothing to do with directly freeing memory. Memory management is done indirectly via breaking references, see the memory management page for more details.

The delete operator removes a given property from an object. On successful deletion, it will return true, else false will be returned. However, it is important to consider the following scenarios:

If the property which you are trying to delete does not exist, delete will not have any effect and will return true
If a property with the same name exists on the object's prototype chain, then, after deletion, the object will use the property from the prototype chain (in other words, delete only has an effect on own properties).
Any property declared with var cannot be deleted from the global scope or from a function's scope.
As such, delete cannot delete any functions in the global scope (whether this is part from a function definition or a function expression).
Functions which are part of an object (apart from the global scope) can be deleted with delete.
Any property declared with let or const cannot be deleted from the scope within which they were defined.
Non-configurable properties cannot be removed. This includes properties of built-in objects like Math, Array, Object and properties that are created as non-configurable with methods like Object.defineProperty().
The following snippet gives a simple example:

var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete Employee.name);   // returns true
console.log(delete Employee.age);    // returns true

// When trying to delete a property that does 
// not exist, true is returned 
console.log(delete Employee.salary); // returns true
