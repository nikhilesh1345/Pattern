

function findMinAndMax(arr){
      if(arr==null||arr.length===0) return ;
        let min = arr[0]
        let max=arr[0]
    for(let i=1;i<arr.length;i++){
       if(arr[i]<min){
        min=arr[i]
       }
       if(arr[i]>max){
        max =arr[i]
       }
    }
    return [min, max]
}
console.log(findMinAndMax([1,2,3,4,5,6]))