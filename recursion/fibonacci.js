// function getNthFibo(n){
//     if(n<=1) return n;
//     var sum =0
//     last =1
//     lastlast =0
//     for(var i=1;i<n;i++){
//         sum = lastlast+last ;
//         lastlast = last
//         last = sum
//     }
//     return sum 
// }
// console.log(getNthFibo(10))


function fibonacci(nums){
    if(nums<=2){
        return 1
    }
    let fn = fibonacci(nums-1)+fibonacci(nums-2)
    return fn
}
console.log( fibonacci(10))

function CountDown(n){
    if(n===0) return ;
    else{
        console.log(n)
        n--
    }
    CountDown(n)
}
 let x=CountDown(6)
 console.log(x)

 function sum(n){
    if(n===1) return 1;
    return n+sum(n-1)

 }
console.log( sum(5))

function multi(n){
    if(n===1) return 1;
    return n*multi(n-1)

 }
console.log( multi(5))

// function productofaRRAY(arr,ind){
//     let sum = 1
//       if(arr.length===1) return arr[0]
//       sum=sum*arr.pop()
//         ind--
        

// }
// function productofaRRAY(arr,ind){
//     let sum = 1
//       if(arr.length===1) return arr[0]
//         else{sum=sum*arr.pop()}
//       productofaRRAY(arr,ind-1)
//         return sum

// }
// let arr=[1,2,3,4]
// console.log(productofaRRAY(arr,3))



function reverseString1(str){
    if(str.length<=1) return str[0];
    return reverseString1(str.slice(1))+str[0]
}
console.log(reverseString1("rmmu"))


function capitalisingFn(arr){
    let result =[]
    if(arr.length==0) return []
    let s= arr[0][0].toUpperCase().concat(arr[0].slice(1))
    result.push(s)
    return result.concat(capitalisingFn(arr.slice(1)))
}
console.log(capitalisingFn(["abc","ghj","fghj"]))




let arr2=["hi","fgg","ggf"]
function reverseind(str){
    let result=[]
    for(let i=0;i<str.length;i++){
            str[i]=str[i].split("").reverse().join("")
          result.push(str[i])
    }
    return result
}
console.log(reverseind(arr2))

let arr="programming"
 console.log(arr.split(""))
 let letter="m"
 function removeKFromWord(arr,k){
   let result=[]
   for(let letter of arr){
     if(letter===k){
       continue;
     }else{
       result.push(letter)
     }
   }
   return result.join("")
 }
 console.log(removeKFromWord(arr,letter))


//  let arr="programming"
//  console.log(arr.split(""))
//  let letter="m"
 function removeKFromWord(arr,k){
   let lett=""
   for(let letter of arr){
     if(letter===k){
       continue;
     }else{
       lett+=letter
     }
   }
   return lett
 }
 console.log(removeKFromWord(arr,letter))






