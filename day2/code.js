//?tipos de Datos Primitivos (no modificables)
/*
   *Números, Cadenas,Booleanos,Nulo,Indefinido
*/
let world = 'JavaScript';
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo);
let js = "JavaScript";
let py = "Python";
console.log(js == py);
let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); 

//? Tipos de Datos no Primitivos (modificables)
   //*Los tipos de datos no primitivos son modificables o mutables
let nums = [1,2,3];
nums[0] = 24;
console.log(nums);

let usuarioUnoa = {
   nombre: "Asabeneh",
   papel: "teaching",
   pais: "Finland",
 };
 let usuarioDos = {
   nombre: "Asabeneh",
   papel: "teaching",
   pais: "Finland",
 };
 console.log(usuarioUnoa == usuarioDos)

 let nums2 = [1,2,3];
 let almacenando = nums2;
console.log(nums2 == almacenando)

let usuarioUno = {
   nombre: "Asabeneh",
   papel: "teaching",
   pais: "Finland",
 };
let usuarioDosa = usuarioUno;
console.log(usuarioUno == usuarioDosa);
