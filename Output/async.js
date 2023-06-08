

setImmediate(()=>{
  console.log(1)
})
setTimeout(()=>{
    console.log(2)
},0)
process.nextTick(()=>{
    console.log(3)
})
console.log(4)

// 4
// 3
// 2
// 1