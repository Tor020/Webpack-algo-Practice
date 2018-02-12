const hexToRgb = hex => [0,1,2].map(i => hex2Dec(getSubString(hex1, i * 2));

const rgbs = [...arguments].map(hexToRgb);

const getAvgComp = (c1, c2) => deci2Hex(Math.floor((c1 + c2) / 2));
const getAvgRgb = (rgb1, rgb2) => rgb1.map((c1, i) => getAvgComp(c1, rgb2[i]));
const avgRgb = rgbs.reduce(getAvgRgb);

return avgRgb.join('');

// * Normalize function and parameter names (const hex2Dec = (hexa) -> const hexToDec = (hex); const deci2Hex = (decimal) -> const decToHex = (dec)). Also, the function should have been called getAvgRgb instead of getAvgHex IMO
// * Remove 'use strict' (explanation above)
// * Move let avg from top to where avg is assigned
// * Make all variables const (they don't have to be mutable)
// * Return the value of avg directly instead of storing it in a variable (i.e. return${avgR}${avgG}${avgB}``)

// I would also try to use arrays + array fns to make the bottom half of the function more DRY (don't repeat yourself). If done correctly, it would probably also improve the readability of that code (if you know your way around array fns)
// Something like:


// (untested, but you get the idea)
// Neat side effect is that it's now scaleable so you can very easily do the average of 3, 5, 100 rgbs now. Also, that code is 50% shorter than yours :wink: 