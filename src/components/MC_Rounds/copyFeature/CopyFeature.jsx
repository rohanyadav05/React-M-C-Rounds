import React, { useState } from "react";
import "./CopyFeatureStyle.css";

const CopyFeature = () => {
  const [data, setData] = useState([
    { name: "data 1", selected: false },
    { name: "data 2", selected: false },
    { name: "data 3", selected: false },
  ]);

  const handleCopy = (indexed) => {
    // const filteredData = data.filter((item,i) =>  i === indexed).selected = true;
    // console.log('filteredData =', filteredData );
    // const updatedData = [...filteredData, {...filteredData, data[indexed].selected:true} ];
    // console.log('updated data= ', updatedData);
    // setData(updatedData);
    const updatedData = data.map((item,i) => {
        if(i === indexed){
            item.selected = true;
        }
        return item;
    }
    )
    console.log('updated data= ', updatedData);
    setData(updatedData);
    setTimeout(() => {
        const updatedData = data.map((item,i) => {
            if(i === indexed){
                item.selected = false;
            }
            return item;
        }
        )
        console.log('updated data= ', updatedData);
        setData(updatedData);
    }, 3000);
  }
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="copyFeature-body" key={index}>
            <div className="copyFeature-label">{item.name}</div>
            <div><button onClick={() => handleCopy(index)}>{!item.selected ? 'Save' : 'Saved'}</button></div>
          </div>
        );
      })}
    </>
  );
};

export default CopyFeature;
