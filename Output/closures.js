let count=0;
function printCount(){
    if(count==0){
        let count=3
        console.log("count1",count);
    }
    console.log("count2",count);
}
console.log(printCount())
// count1 3
// count2 0
// undefined

let i=1;
const f=()=>{
    console.log(i)
}
f()
// 1

if(true){
    let y=1;
    const z=()=>{
        console.log(y)
    }
}
// z()
// error

let w;
if(true){
    let p=100
    let w=()=>{
        console.log(p)
    }
}
// console.log(p)
// error
// w()
// not afunction
// console.dir(w)
// undefined
