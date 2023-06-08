

// "hello" ===> "HeLlO"

function atlernatChange(string){
    let str=""
    for(let i=0;i<string.length;i++){
        if(i%2===0) str+=string[i].toUpperCase()
         else str+=string[i].toLowerCase()
    }
    return str
}
console.log(atlernatChange("hello"))