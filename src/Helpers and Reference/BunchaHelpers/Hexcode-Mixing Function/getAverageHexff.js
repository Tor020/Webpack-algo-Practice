function getAvgHex (hex1, hex2) {
  'use strict';
  let avg;

const hex2Dec = (hexa) => {
  return parseInt(hexa, 16);
}

const deci2Hex = (decimal) => {
return decimal.toString(16).padStart(2,'0');      
}


let r1 = hex2Dec(hex1.substr(0, 2));
let g1 = hex2Dec(hex1.substr(2, 2));
let b1 = hex2Dec(hex1.substr(4, 2));

let r2 = hex2Dec(hex2.substr(0, 2));
let g2 = hex2Dec(hex2.substr(2, 2));
let b2 = hex2Dec(hex2.substr(4, 2));

let avgR =  deci2Hex(Math.floor((r1 + r2) / 2));
let avgG =  deci2Hex(Math.floor((g1 + g2) / 2));
let avgB =  deci2Hex(Math.floor((b1 + b2) / 2));

avg = `${avgR}${avgG}${avgB}`
  return avg
  
}

console.log(getAvgHex('1345AB','4FC14B')); // 31837b
console.log(getAvgHex('FFAACC','FFBB14')); // ffb270


