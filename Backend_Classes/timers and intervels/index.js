console.log("a");

setTimeout(() => {
    console.log("h");  
}, 0);

setTimeout(() => {
    console.log("c");  
}, 2000);

setTimeout(() => {
    console.log("b");  
},1000);

console.log("x");

// output : axhbc

// Promises vs Timer -> Promises take more pirority always no metter what the time interval is given 
// setImmidate - > similar as setInterval with 0ms
// I/O operations(readimg . writing) -> setImmediate will always take more priority then then setTimeout (with 0ms)
// process.nextTick -> this take more priority then setImmediate, both inside and outside the I/O operator 

// micro task queue -> take more priority and run immidate (promises , process.nextTick)

//  # NODE JS CORE CONCEPTS 


setTimeout(()=>{
    console.log("m")
} , 0)

setImmediate(()=>{
    console.log("b")
})

// output : either mb || bm


// input outpur syatem
const fs = require("fs")

fs.readFile("./lecture.txt" , "utf-8" , (err , data)=>{
    setTimeout(()=>{
        console.log("m")
    } , 0)
    
    setImmediate(()=>{
        console.log("b")
    })
    process.nextTick(()=>{
        console.log("z")
    })
})

// output : bm , setimmediate has more priority in I/O  