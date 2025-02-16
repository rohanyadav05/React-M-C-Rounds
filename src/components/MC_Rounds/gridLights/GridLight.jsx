import React, { useEffect, useState } from "react";
import "./GridStyle.css";

const GridLight = () => {
  const [seqArr, setSeqArr] = useState(new Map());
  let arr = [
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 1],
  ];

  const handleSelection = (uniqueKey) => {
    console.log("uniqueKey", uniqueKey);
    if (seqArr[seqArr]) {
    } else {
      setSeqArr((prevMap) => {
        const newMap = new Map(prevMap);
        newMap.set(uniqueKey, true);
        return newMap;
      });
    }
    let validBoxSize = arr
      .flat(Infinity)
      .reduce((curr, val) => (val += curr), 0);
    console.log(seqArr.size - 1, validBoxSize);

    // if (seqArr.size === validBoxSize - 1) {
    //   undoColor();
    // }

    console.log("seqArr", seqArr);
  };

  const undoColor = () => {
    
    const seqKeys = Array.from(seqArr.keys());// ['0-1','1-1',...]
    let index = seqKeys.length-1;
    console.log('seqKeys',seqKeys)

    const interval = setInterval(() => {
console.log(index)
        if(index < 0){
            clearInterval(interval)
            return new Map();


        } else {
            setSeqArr((prevMap) => {
                let newMap = new Map(prevMap);
                newMap.delete(seqKeys[index]);
                index--;
                return newMap;
            })
        }

      
    }, 400);

    

  };
  
  useEffect(() => {
    let validBoxSize = arr.flat(Infinity).reduce((curr, val) => curr + val, 0);
    
    if (seqArr.size === validBoxSize) {  // This will now reflect the latest state
        undoColor();
    }
}, [seqArr]); 

  return (
    <>
      <h2>Grid M/C Questions</h2>

      {arr.map((row, index) => {
        return (
          <div key={index + Math.random() * 1000} className="container-grid">
            {row.map((column, i) => {
              const uniqueKey = `${index}-${i}`;
              const cssName =
                seqArr.get(uniqueKey) === true ? "selected-box" : "box";

              return (
                <div
                  onClick={() => handleSelection(uniqueKey)}
                  key={index + column + Math.random() * 1000}
                  className={
                    column === 0
                      ? `grid-block-disabled`
                      : `grid-block ${cssName}`
                  }
                >
                  {" "}
                  {column}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default GridLight;
