const marvel_heros=["Thor","Ironman","SpiderMan"]
const dc =["Superman","flash","Batman"]
// marvel_heros.push(dc)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])


// const allHeors= marvel_heros.concat(dc)
// console.log(allHeors);

//Merge the two array 
const all_new_Heros=[...marvel_heros,...dc]
//console.log(all_new_Heros)

const another_array=[1,2,3,[4,5,6],7,[6,7],[4,5]]
//This will make single one array of all the array inside the array 
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")); //Array ma lanee laii 
console.log(Array.from({name:"hitesh"})); //Intersting 


let score1=100
let score2=200
let score3=300
//Sidahaii aaray ma lanee sidhaii number haru lai 
console.log(Array.of(score1,score2,score3))


//Is Array 
// of From and isArray