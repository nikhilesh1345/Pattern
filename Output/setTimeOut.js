for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
// 3
// 3
// 3
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
// 0
// 1
// 2
const arr=[5,120,15,21]
for (let i = 0; i < arr.length; i++) {
    ((i)=>{

    })(i)
    setTimeout(() => console.log(`${i} ${arr[i]}`), arr[i]);
}
// 0 5
// 2 15
// 3 21
// 1 120
for (var i = 0; i < 3; i++) {
    ((i)=>{
        setTimeout(() => console.log(i), 1000);
    })(i)
}
// 0
// 1
// 2
