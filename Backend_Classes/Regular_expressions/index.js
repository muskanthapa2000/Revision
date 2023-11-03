// const regularexpression1 = /.../g   -- g used for pairing 
const regularexpression1 = /x.a*b+y*/ // Using a regular expression literal:
const regularexpression2 = ("....")  // Using the RegExp() constructor function:

// . -> any single character  return true or false 
// .. -> any plural character 
//  + -> one or more repetation of previous character
// ^ -> string startes with character  /^x/ the starting startes with x character 
// $ -> string ends with character /&x/ the string ends with c character   
// [0-9] -> character between 0 to 9 will place their 
// ? - > The question mark symbol `?` matches **zero or one occurrence** of the pattern left to it.
// {} -> Consider this code: `{n,m}`. This means at least `n`, and at most `m` repetitions of the pattern left to it.
// **`|`** **- Alternation** -> Vertical bar `|` is used for alternation (`or` operator).
// **`()`** **- Group** -> Parentheses `()` is used to group sub-patterns. For example, `(a|b|c)xz` match any string that matches either `a` or `b` or `c` followed by `xz`
// **`\`** **- Backslash**-> Backslash `\` is used to escape various characters including all metacharacters. For example, `\$a` match if a string contains `$` followed by `a`. Here, `$` is not interpreted by a RegEx engine in a special way.


const string = "xbabbya";

const result = regularexpression1.test(string);
console.log(result);

// .match -> matched_value or null 

const match = string.match(regularexpression1);
console.log(match);

// * -> 0 or more repetation of previous character 

const str = 'The quick brown fox jumps over the lazy dog.';
const regex = /brown/gi;

const searchData = str.search(regex);

console.log(searchData); // return index

