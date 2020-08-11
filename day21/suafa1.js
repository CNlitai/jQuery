var array1 = ['a','b','c'];
var array2 = ['d','e','f'];

var str = array1 +"," + array2;
str = str.split(',')
str.splice(1,1)

console.log(str)


