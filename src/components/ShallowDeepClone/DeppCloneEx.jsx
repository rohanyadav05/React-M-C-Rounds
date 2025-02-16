import React from "react";
import _ from "lodash";

const DeppCloneEx = () => {
  let obj = {
    name: "Rohan",
    address: {
      city: "Lucknow",
      FutureAddress: {
        city: "Lucknow",
        HouseNo: "C-1272-1274-1276",
      },
    },
  };
  console.log("original obj", obj);
  // Creating deep copies.
  // const deepClonedObj = _.cloneDeep(obj);  // WAY 1 of creating deep clone
  const deepClonedObj = JSON.parse(JSON.stringify(obj))  // WAY 2 of creating deep clone
  deepClonedObj.name = "Rohan Yadav";

  // obj.name = 'Rohan Yaduvanshi'

  console.log("deepClonedObj obj", deepClonedObj);

  // Creating Shallow copy

  // let newShallowObj = {...obj};
  let newShallowObj = Object.assign({},obj);
  newShallowObj.address.FutureAddress.city = 'LUCKNOW';

  console.log("original obj", obj);

  return <div>DeppCloneEx</div>;
};

export default DeppCloneEx;
