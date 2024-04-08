// 2 Types of Memory
// Stack(Primitive) Heap (Non  Primtive Data Types) //Array ,oBjects
// Heap- Refernceee
// let myYoutubeName="ManojPanta"
// Stack:

//variable Declare Stack ma bascha 
// let anothername=myYoutubeName
// console.log(anothername);
let userOne={
    email:"pantamanoj08@mail.com",
    upi:"user@"
}

let userTwo=userOne
userTwo.email="spriya123@gmail.com"
//Yedi maile UseTwo ko email change gare bhanne reference ko value ma ni change huncha 
console.log(userOne.email);
console.log(userTwo.email);

//Here is the Note k HUNCHA BHANDA 
//Refefence ma change garda original value ma change huncha 

