

 var removeDuplicates = function(S) {
    const stack = []
    
    for (let i = 0; i < S.length; i++) {
        if (stack[stack.length - 1] === S[i]) {
            stack.pop()
        } else {
            stack.push(S[i])
        }
    }
    
    return stack.join('')
};
console.log(removeDuplicates("hello"))