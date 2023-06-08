console.log(null&&undefined)
console.log(0 || 1&& 2||3)
console.log(null|| 2&&3 ||4)
console.log((1&&2)||(0||3))
// null
// 2
// 3
// 2
/* AND(&&) return left operator if it can be converted to false:
otherwise return right operand
OR(||) RETURN LEFT OPERAND IF IT CAN BE CONVERTED TO TRUE ; 
other wise return right operator*/