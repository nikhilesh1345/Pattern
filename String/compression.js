

const compression=(str)=>{
    let output=""
    let count=1
    let uniqCount=0
    for(let i=0 ; i<str.length ; i++){
        if(str[i]===str[i+1]){
            count++
        }else{
            output += str[i]+count
            count=1
            uniqCount++
        }
    }
    return uniqCount===str.length?str :output
}
console.log(compression("aab"))
// a2b1