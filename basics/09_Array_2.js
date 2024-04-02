const marvel_heros = ["ironman", "thor", "spidy"]
const dc_heros = ["superman", "flash", "batman"]

 const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

//[...] It spread outs the array like we spill water 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));



