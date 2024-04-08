// const score=400

// const balance=new Number(100)
// console.log(balance.toString().length)
// console.log(balance.toFixed(1))
// const otherNumber=123.344
// console.log(otherNumber.toPrecision(3));//Precise vlaue

// const hundred=100000000
// console.log(hundred.toLocaleString('en-IN'))


// //+++++++++++++++++++++++=Maths++++++++++++++++++++//
 
// console.log(Math)
// console.log(Math.round(4.3))
// console.log(Math.abs(-4))
// console.log(Math.sqrt(25))
// console.log(Math.min(2,3,4,4));

console.log(Math.random());//0 to 1 ko bicha ma aaucha 
console.log(Math.random()*10+1);//0 to 1 ko bicha ma aaucha
console.log(Math.floor(Math.random()*10)+1)
const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+ min)
//Random Le Value 0 DEKI 1 samba matar decha ani *10 gare pasi one digits pasi sarxa 
//For EXAMPALE:Yedi random value 0.04 aayo ani Multiply by 10 gareda taw 0.4 teslee le value 0 dencha whcih is not anything 
//+1 gareko 
//yedi aaba kunai pani value ko bich ma thapunu cha bhane random value 
//we use Math.floor for largest value.
//Point to Remember:(max-min+1)+ min