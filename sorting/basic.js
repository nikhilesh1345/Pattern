let arr=[8,7,6,5]
console.log(arr.sort((a,b)=>a-b))
console.log(arr.sort((a,b)=>b-a))

let arr1=["d","b","a"]
console.log(arr1.sort((a,b)=>a>b?1:-1))
console.log(arr1.sort((a,b)=>a<b?1:-1))