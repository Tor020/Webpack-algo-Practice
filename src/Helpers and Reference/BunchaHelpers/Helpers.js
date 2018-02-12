export const a = (val) => {
  document.write(val);
  return console.log(val);
};
export const b = (...val) => {
  return console.log(val);
};


// Function to cut 3 items out of an array and push it to another array until there is no more than 3 inside
function spliceCheck(array) {
let arrContainer = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length > 3) {
      arrContainer.push(array.splice(0, 3))
    }
  }
  return arrContainer;
}
