/*
// Misc Utility Methods
General non actionable methods

Array.from()          Creates a new Array instance from an array-like or iterable object.
Array.isArray()       Returns true if a variable is an array, if not false.
Array.of()            Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

// Mutator methods
These methods modify the array:

Array.prototype.copyWithin()                   Copies a sequence of array elements within the array.
Array.prototype.fill()                         Fills all the elements of an array from a start index to an end index with a static value.
Array.prototype.pop()                          Removes the last element from an array and returns that element.
Array.prototype.push()                         Adds one or more elements to the end of an array and returns the new length of the array.
Array.prototype.reverse()                      Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
Array.prototype.shift()                        Removes the first element from an array and returns that element.

_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.sort()                         Sorts the elements of an array in place and returns the array.
var myArray = new Array('Wind', 'Rain', 'Fire');
myArray.sort(); 
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]

var sortFn = function(a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn); 
// sorts the array so that myArray = ["Wind","Fire","Rain"]
if a is less than b by the sorting system, return -1 (or any negative number)
if a is greater than b by the sorting system, return 1 (or any positive number)
if a and b are considered equivalent, return 0.

_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.splice()                       Adds and/or removes elements from an array.
splice(index, count_to_remove, addElement1, addElement2, ...) removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.

var myArray = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd'); 
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was), 
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.unshift()                      Adds one or more elements to the front of an array and returns the new length of the array

// Accessor methods
These methods do not modify the array and return some representation of the array.
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.concat()                        Returns a new array comprised of this array joined with other array(s) and/or value(s).
var myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c'); 
// myArray is now ["1", "2", "3", "a", "b", "c"]

Array.prototype.includes()                      Determines whether an array contains a certain element, returning true or false as appropriate.
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.indexOf()                       Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
indexOf(searchElement[, fromIndex]) searches the array for searchElement and returns the index of the first match.

var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found

_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.join()                          Joins all elements of an array into a string.
join(deliminator = ',') joins all elements of an array into a string.
var myArray = new Array('Wind', 'Rain', 'Fire');
var list = myArray.join(' - '); // list is "Wind - Rain - Fire"
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.lastIndexOf()                   Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
lastIndexOf(searchElement[, fromIndex]) works like indexOf, but starts at the end and searches backwards.

var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // logs 5
// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); // logs 1
console.log(a.lastIndexOf('z')); // logs -1
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.slice()                         Extracts a section of an array and returns a new array.
slice(start_index, upto_index) extracts a section of an array and returns a new array.

var myArray = new Array('a', 'b', 'c', 'd', 'e');
myArray = myArray.slice(1, 4); // starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]


Iteration methods
Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.every()                         Returns true if every element in this array satisfies the provided testing function.
every(callback[, thisObject]) returns true if callback returns true for every item in the array.

function isNumber(value) {
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false

_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.filter()                        Creates a new array with all of the elements of this array for which the provided filtering function returns true.
filter(callback[, thisObject]) returns a new array containing the items for which callback returned true.

var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item === 'number'; });
console.log(a2); // logs [10, 20, 30]

Array.prototype.find()                          Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
Array.prototype.findIndex()                     Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.forEach()                       Calls a function for each element in the array.
forEach(callback[, thisObject]) executes callback on every array item and returns undefined.

var a = ['a', 'b', 'c'];
a.forEach(function(element) { console.log(element); }); 
// logs each item in turn


_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.map()                           Creates a new array with the results of calling a provided function on every element in this array.
map(callback[, thisObject]) returns a new array of the return value from executing callback on every array item.

var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
console.log(a2); // logs ['A', 'B', 'C']
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________
Array.prototype.reduce()                        Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
reduce(callback[, initialValue]) applies callback(firstValue, secondValue) to reduce the list of items down to a single value and returns that value.

var a = [10, 20, 30];
var total = a.reduce(function(first, second) { return first + second; }, 0);
console.log(total) // Prints 60

Array.prototype.reduceRight()                   Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
reduceRight(callback[, initialValue]) works like reduce(), but starts with the last element.

reduce and reduceRight are the least obvious of the iterative array methods. They should be used for algorithms that combine two values recursively in order to reduce a sequence down to a single value.
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________


Array.prototype.some()                          Returns true if at least one element in this array satisfies the provided testing function.
some(callback[, thisObject]) returns true if callback returns true for at least one item in the array.

function isNumber(value) {
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // logs true
var a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // logs true
var a3 = ['1', '2', '3'];
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________

/*
