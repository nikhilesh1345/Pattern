

function getMaxOccurance(arr){
    let max = Math.max(...arr)
    let count=0
    arr.forEach((val)=>{val==max&&count++})
    return count
}
console.log(getMaxOccurance([1,1,2,3,4,4]))