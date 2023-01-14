import { numMapEn, numMapRu } from "./modules/dictionary.js";
const num = 4677767;

function numToString(num, numMap) { 
  return num
  .toString()
  .split('')
  .reduce((acc, el, index) => index === 0 ? numMap[el] : `${acc} ${numMap[el]}`, '');
}

console.log(numToString(num, numMapRu));