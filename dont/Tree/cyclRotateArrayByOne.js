// Cyclically rotate an array by one
// BasicAccuracy: 69.6%Submissions: 190K+Points: 1
// Lamp
// Stand out from the crowd. Prepare with Complete Interview Preparation  

// Given an array, rotate the array by one position in clock-wise direction.
 
// Example 1:
// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4
 

// Example 2:

// Input:
// N = 8
// A[] = {9, 8, 7, 6, 4, 2, 1, 3}
// Output:
// 3 9 8 7 6 4 2 1

  function rotate(arr,n){
    //code here
    for (let i = 0; i < arr.length-1; i++) {
        arr.push(arr.shift())
    }
    return arr;
}