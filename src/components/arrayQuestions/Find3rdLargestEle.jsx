import React from 'react'

const Find3rdLargestEle = () => {
    let arr = [2,3,4,5,8,11,7,6,10];

    // Function to find the 3rd largest Element

    // bruteforce way to find nth element
    function ThirdLargest(arr,n){
// sorts in ascending order as arr.sort((a,b) => a-b) will sort in descending order
        let sortedArr = arr.sort((a,b) => a-b);
        console.log('sorted arr', sortedArr)
        return arr[arr.length-n];
    }
    console.log(`3rd largest element in ${arr} is- ${ThirdLargest(arr,3)}`);

    
  return (
    <div>Find3rdLargestEle</div>
  )
}

export default Find3rdLargestEle