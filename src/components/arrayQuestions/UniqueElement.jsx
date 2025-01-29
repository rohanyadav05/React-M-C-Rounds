import React from 'react'

const UniqueElement = () => {

    //Problem Statement-  To get unique elements without using set or map
    let arr = [2,3,5,2,6,3,4]; // Desired output = [2,3,5,6,4]

    // Brute force way is to use MAP Or Set buts asked to not to use them but will solve using MAP and SET as well

    // 1. USING SET
    // let ans = [...new Set(arr)];
    // console.log(ans);

    // 2. USING MAP
//     let map1 = new Map();
//     for(let i=0; i< arr.length;i++){
//       map1.set(arr[i],(map1.get(arr[i]) || 0) +1);
//     }
//     let ans =[];
//     console.log('map1', map1);
//     map1.forEach((key,value) => {
//       if(value>1){
// ans.push(value);
//       }
//     })
//     console.log('ans using map', ans);

// Solving without using Map or Set
// let arr = [2,3,5,2,6,3,4];
let sortedArr = arr.sort((a,b) => a-b); // O(n log n)
let ans = [];
for(let i =0; i< arr.length-1 ; i++){
  if(sortedArr[i] !== sortedArr[i+1]){
ans.push(arr[i]);
if(i+1 === arr.length-1){
  ans.push(arr[i+1]);
}
  }
}
console.log('arr,sortedArr,ans', arr, sortedArr, ans)

// Another way would be using {}
let obj = {}
for(let item of arr){
  obj[item] = (obj[item]? obj[item] : 0) + 1;
}
let ans2 = [];
for(let item of arr){
  if (obj[item] === 1){
  ans2.push(item);
  }
}
console.log('arr2 , ans2', arr, ans);


  return (
    <div>UniqueElement</div>
  )
}

export default UniqueElement