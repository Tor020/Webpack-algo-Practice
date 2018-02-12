function getAvgHex (hex1, hex2) {
  'use strict';
  let avg;

// converts Hexadecimal to Decimal
const hex2Dec = (hexa) => {
  return parseInt(hexa, 16);
};

// converts Decimal to HexaDecimal
const deci2Hex = (decimal) => {
  return decimal.toString(16).padStart(2,'0');      
};

// gets the two character substring within the Hex Code
const getSubString = (hex, place) => {
  return hex.substr(place, 2);
};

const r1 = hex2Dec(getSubString(hex1,0));
 g1 = hex2Dec(getSubString(hex1,2));
 b1 = hex2Dec(getSubString(hex1,4));

 r2 = hex2Dec(getSubString(hex2,0));
 g2 = hex2Dec(getSubString(hex2,2));
 b2 = hex2Dec(getSubString(hex2,4));

 avgR = deci2Hex(Math.floor((r1 + r2) / 2));
 avgG = deci2Hex(Math.floor((g1 + g2) / 2));
 avgB = deci2Hex(Math.floor((b1 + b2) / 2));

avg = `${avgR}${avgG}${avgB}`

  return avg  
}

console.log(getAvgHex('1345AB','4FC14B')); // 31837b
console.log(getAvgHex('FFAACC','FFBB14')); // ffb270


