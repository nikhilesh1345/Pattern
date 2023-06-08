

const reverseInt=(nums)=>{
    return parseInt(nums.toString().split("").reverse().join(""))
}
console.log({
    testcas1: reverseInt(51),
    testcas2: reverseInt(500),
    testcas3: reverseInt(-15),
    testcas4: reverseInt(51)
})

function reverseNum(num){
    let reversed = num.toString().split("").reverse().join("")
   return  parseInt(reversed)*Math.sign(num)
}
console.log(reverseNum(-765))