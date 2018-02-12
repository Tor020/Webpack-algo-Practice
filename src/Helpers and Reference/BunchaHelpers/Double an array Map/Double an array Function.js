
// These three are the same thing.
const doubledNumbers = numbers.map(function(n) {return n*2;});

function double (arr) {
  return arr.map((item) => item * 2)
}

const dbl = (arr) => {
  return arr.map((item) => item *2 )
}

// The argument to map is the function that it uses to transform the elements in the first array into the elements in the second array. It is a tremendously useful method.



