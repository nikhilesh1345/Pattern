
function countUniqueValue(arr){
    if(arr.length===0){
        return 0;
    }
    var i=0;
    for(var j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i+ 1
}
 let x =countUniqueValue([1,1,1,2,2,4,7,8])
 console.log(x)
 var uniqe = function(nums) {
  
    let remaining = 0
    let i = 0
    while(i<nums.length){
        if(nums[i] != nums[i+2]){
            nums[remaining] = nums[i]
            remaining++
        }
        i++
    }
    return remaining
};
console.log(uniqe([1,1,1,2,2,4,7,8]))