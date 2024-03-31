const name = "Arif"
const repoCount = 50
// console.log(name + repocount + "value");
//Instead of Concatinaation we can use like be below for better readability 
console.log(`Hello my name is ${name} and my repocount is {repoCount}`); 

const gameName = new String('Arif-hdfc');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt('2'));
//know chart at that place by index number

console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "  hello   "
console.log(newStringOne.trim());
//trim func will remove unnecessary spaces from the line 

const url ="https://github.com/Dabhiarif/%20javascriptwithchai"
console.log(url.replace('%20','-'));
//Replace function
console.log(url.includes('arif'));
//include function to find particular words in your strings

