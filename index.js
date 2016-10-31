var myEach = require('./exercises/myEach');
var myMap = require('./exercises/myMap');
var myReduce = require('./exercises/myReduce');
/* *********************************************************************
  You can edit this file.  It will make use of your code in:

  exercises/
      myEach.js
      myMap.js
      myReduce.js

  To execute it from the command line, run: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


/* myEach */

//
/*
myEach(numArray, function print(element, index, arr) {
   console.log('inside myEach', element, index, arr);
 });*/




/* myMap */

var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap');
console.log(output);
console.log(output[0] === "A" && output[1] === "B" && output[2] === "C"); // assertion

console.log("the end");
