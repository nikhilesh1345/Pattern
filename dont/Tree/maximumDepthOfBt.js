
Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2



var maxDepth = function(root) {
    if(!root) return null;
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
};