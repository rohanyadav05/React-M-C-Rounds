import React from 'react'

const ExtractAllNumbers = () => {

    let arr = [1,2, 'four', [4,5,[9]], {c:6}, {4:0}];

    let ans =[];
    function extractNum(arr) {
        arr.map((item) => {
            if(Array.isArray(item)){
                extractNum(item);
            } else if(typeof(item) === 'number'){
                ans.push(item);
            } else if(typeof(item) === 'object' && item !== null){
                
                    extractNum(Object.entries(item));
                
            }

        })
        return ans;

    }
    console.log(arr,extractNum(arr).sort((a,b) => a-b));
  return (
    <div>ExtractAllNumbers</div>
  )
}

export default ExtractAllNumbers