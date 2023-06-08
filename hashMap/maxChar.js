

function maxCharacter(string){
    let obj={}
    let max=0
    let maxChar=""
    for(let str of string){
        if(obj[str]){
            obj[str]++
        }else{
            obj[str]=1
        }
    }
    for(let char in obj){
        if(obj[char]>max){
            max=obj[char]
            maxChar = char
        }
    }
    return maxChar
}
console.log(maxCharacter("helllo"))