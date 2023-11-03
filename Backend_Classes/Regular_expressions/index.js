// const regularexpression1 = /.../g   -- g used for pairing 
const regularexpression1 = /x.a*b+y*/
const regularexpression2 = ("....")

// . -> any single character  return true or false 
// .. -> any plural character 
//  + -> one or more repetation of previous character
// ^ -> string startes with character  /^x/ the starting startes with x character 
// $ -> string ends with character /&x/ the string ends with c character   
// [0-9] -> character between 0 to 9 will place their 

const string = "xbabbya";

const result = regularexpression1.test(string);
console.log(result);

// .match -> matched_value or null 

const match = string.match(regularexpression1);
console.log(match);

// * -> 0 or more repetation of previous character 