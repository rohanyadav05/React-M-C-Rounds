import React from "react";

const StringMap = () => {

    // Expected input ["2:hello", "4:yo", "3:ji", "2:okad"];
    // Expected output {2 => 'hello okad', 3 => 'ji', 4 => 'yo'}

  let arr = ["2:hello", "4:yo", "3:ji", "2:okad"];
  let newArr = [];
  for (let item of arr) {
    newArr.push(Number(item.split(":")[0]));
    newArr.push(item.split(":")[1]);
  }

  function quesArr(arr) {
    let map1 = new Map();
    for (let i = 0; i < arr.length; i = i + 2) {
        // console.log('i, arr[i]', i , arr[i])
      map1.set(arr[i],
         map1.get(arr[i]) ? map1.get(arr[i])+" "+ arr[i + 1] : arr[i + 1]);
    }
    let sortedArr=  Array.from(map1).sort((a,b) => a[0] -b[0]);
    // console.log("map1", map1);
    return new Map(sortedArr);
  }
//   console.log("newArr", newArr);
console.log(quesArr(newArr));
  return <div>StringMap</div>;
};

export default StringMap;


// Array.from() is a method that creates a new array from an iterable or array-like object.

// In your case:
// You are using Array.from(map1) to convert a Map into an array of key-value pairs.

// Example:
// js
// Copy
// Edit
// let map1 = new Map();
// map1.set(2, "hello okad");
// map1.set(3, "ji");
// map1.set(4, "yo");

// console.log(Array.from(map1));
// // Output: [ [2, "hello okad"], [3, "ji"], [4, "yo"] ]
// Here, Array.from(map1) converts the Map into an array of key-value pairs, where each element is a [key, value] tuple.