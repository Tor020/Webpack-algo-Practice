import { a, b } from '.BunchaHelpers/Helpers'
import {
  arr_Obj_People as people,
  arr_Obj_Comments as comments,
  arr_Obj_Inventors as inventors,
  arrAdjectives as adj,
  arr_Nouns as nouns,
  arr_Obj_animals as animals,
  obj_Fishes as fish
} from './SampleData/1Mixed'

//Create an Array
const miscArr = ['apple', 'butter'];
/* loop over the Array

miscArr.forEach((value, index, arrCalledOn) => {
  b(value, index, arrCalledOn)
  console.log(value, index, arrCalledOn);
})

/*/// Adds items onto end of Array
  
    miscArr.push(25);
    a(miscArr);
    b(miscArr);

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



a(spliceCheck(people))
b(spliceCheck(people))
