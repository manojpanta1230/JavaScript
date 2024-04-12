//singleton Construction abata bhaneko kura lai 

//Objects literals()

//Object.create    //Singleton

//pILA Symbol dEFINE Genaru parcha 
const mySys=Symbol("key1")


const jsUser={     //Keys and Value
name:"Manoj",
// "full name":"Manoj Panta",
age:23,
[mySys]:"mykey1",
location:"nEPAL",
email:"pantamanoj08@gmail.com",
isLoggedIn:false,
lastLoginDays:["Monday","Saturday"]

}
//Two Way Mathi Define garda System le As a String ko kura le garcha 
// console.log(jsUser.name)
// console.log(jsUser["email"])
// console.log(jsUser.mySys)
// console.log( typeof jsUser[mySys])

// jsUser.email="manojpanta08@gmail.com"
// //Object.freeze(jsUser)
// //Freeze Gri Saye pasi chau change  garna chai mildaina

// jsUser.email="manojpanta08@gmail.com"
// console.log(jsUser)

jsUser.greeting =function(){
    console.log("Hello Js User")
}
jsUser.greetingTwo =function(){
    console.log(`Hello Js User,${this.name}`)
}





console.log(jsUser.greetingTwo())


//Tips:
/*
Symbol assign garda value lai Symbol nai leknu parcha 
1) Objects ma bhako sabaii kura haru key raw values  ma hhuncha jaba keys chaii String ma Defined bhako huncha
2) Yedi kunai pani value lai Symbol Garnu cha nbhanne define garda naii [] bracket ma garnu parcha 
3) Object lai reference lida chaiiii this  leyerw rakne

*/