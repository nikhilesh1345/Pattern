// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
var reverseString = function(s) {
    let left=0
    let right= s.length-1
    while(left<right){
        let hold = s[left];
        s[left] = s[right]
        s[right] = hold
        left++
        right--
    }
    return s
};
console.log(reverseString(["h","e","l","l","o"]))

let str ="hello"
console.log(str.split("").reverse().join(""))


function reverseStr(str){
    let revStr=""
    for(let char of str){
        // console.log(revStr)
        revStr = char + revStr
    }
    return revStr
}
// h
// eh
// leh
// lleh
// olleh
console.log(reverseStr("hello"))

// reversing string 

function reverseString(str){
    if(str.length<=1) return str;
    return reverseString(str.slice(1))+str[0]
}
console.log(reverseString("rmmu"))

console.log("he,ll,o".split(","))
// [ 'he', 'll', 'o' ]

console.log(str.split("").reverse().join(""))

let str1="hello world"
console.log(str1.split(" ").reverse().join(" "))

const gamesString = 'Counter Strike, Road Rash, The Witcher, Need for Speed';
const gamesArray = gamesString.split(',');
console.log(gamesArray);

