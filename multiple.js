const salary = 25000;
const isBCS = true;
const height = 61;
const hascar = false;

// single = er mane hocche man set kora or == er mane hocche 2tar moddde compare kora..
// //const eita change korajabe na..

// // && bolte sob sorto tomake obossoi palon korte hobe..
// if(salary > 20000 && height > 66){
//     console.log("su-----patro")
// }
// else{
//     console.log("onno patro khuji")
// }


//jokhon je kono ekta sorto manlei hobe tokhon || eita use korte hobe er mane hocche or..
if(salary > 25000 || height > 77 || isBCS == true){
    console.log("you come here")
}
else{
    console.log("get out here")
}

// ---------------------------------complex condition----------------------------

// hoyto 3ta sorto theke 2 ta mante hobe noyto  last ekta mante hobe sei khetre 1st 2 take ekta()diye then porer soeto likhte hobe..

if((salary > 25000 && hascar == true) || isBCS == true){
    console.log("Welcome to my house")
}
else{
    console.log("You can go..")
}

if((salary > 25000 || hascar == true)  && isBCS == true){
    console.log("Welcome to my house")
}
else{
    console.log("You can go..")
}