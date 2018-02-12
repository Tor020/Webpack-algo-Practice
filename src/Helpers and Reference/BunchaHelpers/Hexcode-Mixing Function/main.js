/*
Write a function that takes 2 colors as arguments and returns the average color.
- The parameters will be two 6-digit hexadecimal strings. This does not need to be validated.
- The return value should be a 6-digit hexadecimal string.
- The hexadecimal strings represent colors in RGB, much like in CSS.
- The average color is to be determined by taking the arithmetic mean for each component: red, green and blue.*
*/


function avgHex(hex1, hex2) {

let totalObject = {};
let avgResult;

  // Isolates each section of the rgb hexcode
  function collectHexes(hex) {

    hexobj = {
      r: hex.substr(0, 2),
      g: hex.substr(2, 2),
      b: hex.substr(4, 2)
    }
    return hexobj
  }

  //Function expression to loop through the object and apply each data into hex format
    let convert = (obj) => {
      let i;
      let data = {};
        for (i in obj) {
          data[i] = (hex2Decimal(obj[i]));
        }
    return data
  }
    // function to convert decimal to hex
  function decimal2Hex(decimal) {
    return decimal.toString(16).padStart(2,'0');      
  }
    // function to hex to decimal
  function hex2Decimal(hexa) {
    return parseInt(hexa, 16);
  }
    // function to get the average of the two hexes
  function getAvg () {
  totalObject.avgR =  totalObject.hex1.r + totalObject.hex2.r /2
  totalObject.avgG =  totalObject.hex1.g + totalObject.hex2.g /2
  totalObject.avgB =  totalObject.hex1.b + totalObject.hex2.b /2

    totalObject.avgDeciR = decimal2Hex(totalObject.avgR)        
    totalObject.avgDeciG = decimal2Hex(totalObject.avgG)
    totalObject.avgDeciB = decimal2Hex(totalObject.avgB)        

    let finalHex = `${totalObject.avgDeciR}${totalObject.avgDeciG}${totalObject.avgDeciB}`

    return finalHex

}

  let set1 = collectHexes(hex1)
  let set2 = collectHexes(hex2)

  totalObject.hex1 = convert(set1)
  totalObject.hex2 = convert(set2)

console.table(totalObject);
 let hex = getAvg();
console.table(totalObject);
console.log(hex);
}

avgHex('1DcB5C', '30CBF1')
avgHex('10B2C3', 'AABBCC')










function isHex(h) {
  // let a = parseInt(h,16);
  let checka = parseInt(h, 16);
  return checka;

  return console.log(a.toString(16) === h.toLowerCase());
  // if (isHex('AABBCC')) alert('true'); else alert('false');
  // let chk = isHex('AABBCC');
  // console.log(chk);
}

// function d2h(d){
//   return d.toString(16).padStart(2,'0');
// }

// function h2d(hexa){
//   return parseInt(hexa, 16);
//   }


