// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
   return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
  return Symbol(propertyName);
};

const createProtoMagicObject = () => {
function MagicFunc(){};
MagicFunc.prototype=Function.prototype;
return MagicFunc;
};

var count=0;
const incrementor = () => {
  count++;
  function res(){
    count++;
    return res;
  };
  res.valueOf=function(){return count}
  return res;
};

var counter=0;
const asyncIncrementor = () => {
  counter++;
  return Promise.resolve(counter);
};

const createIncrementer = function*(){
  for (let i=1; true; i++)
  yield i;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => {
  return new Promise((resolve)=>{setTimeout(()=>{resolve(value)}, 1000)})
};


const getDeepPropertiesCount = (obj) => {
var count=0;
let keys=Object.keys(obj);
if (keys.length==0) return 0;
count+=keys.length;
for(let elem of keys){
  if (typeof obj[elem]==="object") 
  count+=getDeepPropertiesCount(obj[elem]);
}
return count;
};

const createSerializedObject = () => {return null};
const toBuffer = () => {};
const sortByProto = (arr) => {
  return arr.sort((obj1, obj2)=>{
    return obj1.__proto__>obj2.__proto__?1:obj1.__proto__<obj2.__proto__?-1:0;
  })
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;