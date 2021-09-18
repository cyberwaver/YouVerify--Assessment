const _ = require("lodash");

const numberifyObjKeys = (obj, resultObj = obj) => {
  //converts stringified numbers to number form
  Object.entries(obj).forEach(([key, value]) => {
    let valueToUse = value;
    if (_.isObject(value)) valueToUse = numberifyObjKeys(value);
    if (typeof value === "string") {
      let valueInNumber = Number(value);
      valueToUse = Number.isNaN(valueInNumber) ? value : valueInNumber;
    }
    resultObj[key] = valueToUse;
  });
  return resultObj;
};

module.exports = numberifyObjKeys;
