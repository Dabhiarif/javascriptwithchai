const myArr = [0,1,2,3,4,5]
const myHeroes = ["Ironman","CaptainAmerica","groot"]

const myArr2 = new Array(1,5,3,4)
console.log(myArr[1]);

//Array Method 
myArr.push(1)
myArr.push(3)
//directly push value
myArr.pop()
//directly pop Last Value From the Array

//myArr.unshift(9);
// It Will insert at the start of the array
//myArr.shift()
//it will directly from the 1st place of the Array
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr =myArr.join()
console.log(myArr);

console.log(myArr);
console.log(typeof newArr);

//Slice, Splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn1);
console.log(myn2);
