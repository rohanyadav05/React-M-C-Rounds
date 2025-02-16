import React from 'react'

const IntervalInsertion = () => {
//     Input: intervals = [[1,3], [4,5], [6,7], [8,10]], newInterval = [5,6]
// Output: [[1,3], [4,7], [8,10]]
// Explanation: The newInterval [5,6] overlaps with [4,5] and [6,7].

    let intervals = [[1,3], [4,5], [6,7], [8,10]];
    //let intervals = [[1,3],[10,15],[20,30]]
    //[1,3],[5,6],[10,15],[20,30]
    let newInterval = [5,6];
console.log(intervals, newInterval)

 function insertInterval(intervals, newInterval) {
       let ans = intervals.concat([newInterval])
        .sort((a,b) => a[0]-b[0])
        .reduce((newArr, curr) => {

            if(newArr.length === 0 || newArr[newArr.length-1][1] < curr[0]){
                newArr.push(curr);
            } 
            if(newArr[newArr.length-1][1] >= curr[0]){
                newArr[newArr.length-1][1] = Math.max(newArr[newArr.length-1][1], curr[1]);
            }
            return newArr;
                

        }, [])
        return ans;
       
    }
   
   console.log('ans', insertInterval(intervals, newInterval));


  return (
    <div>IntervalInsertion</div>
  )
}

export default IntervalInsertion;