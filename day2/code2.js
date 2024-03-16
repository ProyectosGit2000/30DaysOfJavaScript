//? NUMEROS
let edad = 24;
const gravedad = 9.81;
let masa = 72;
const PI = 3.14;

const boilingPoint = 100;
const bodyTemp = 37;
console.log(edad,gravedad,masa,PI,boilingPoint,bodyTemp);

//?OBJETOS MATEMATICOS
const PI2 = 3.1415;
//EL Objeto math se usa para operaciones matematicas:
document.write(Math.round(PI2) +"<br>"); // este se usa para redondear al valor mas cercano
document.write(Math.round(9.4578) +"<br>") // este se usa para redondear al valor mas cercano
document.write(Math.floor(PI2)+"<br>"); // redondea hacia abajo
document.write(Math.ceil(PI2)+"<br>"); // redondea hacia arriba
document.write(Math.max(-8,10,2,-50,30,98,24)+"<br>"); //devuelve el maximo valor
document.write(Math.min(-1000,-8,10,2,-50,30,98,24)+"<br>"); //devuelve el minimo valor

const numAle = Math.random() ;// esto crea un numero aleatorio del 0 al 0,999999
document.write(numAle+ "<br>") ;
//Mostrando un numero aleatorio entre 0 y 10
const numAleatorio = Math.floor(Math.random() * 11); //como el random nos da decimal lo redondeamos a la baja con floor
document.write(numAleatorio + "<br>");
//Valor Absoluto
document.write(Math.abs(-10) + "<br>"); 
//Raiz Cuadrada
document.write(Math.sqrt(2))+ "<br>";
//Poder
document.write(Math.pow(3, 3))+ "<br>";
//Numero euler
console.log(Math.E); // 2.718

// Logaritmo
// Devuelve el logaritmo natural con base E de x, Math.log(x)
//document.write(Math.log(2)+ "<br>"); // 0.6931471805599453
//document.write(Math.log(10)+ "<br>"); // 2.302585092994046
// Devuelve el logaritmo natural de 2 y 10 respectivamente
//document.write(Math.LN2 + "<br>"); // 0.6931471805599453
//document.write(Math.LN10 + "<br>"); // 2.302585092994046
// Trigonometría
Math.sin(0);
Math.sin(60);
Math.cos(0);
Math.cos(60);

//?GENERADOR DE NUMEROS ALEATORIOS
let randomNum = Math.random(); //0 a 0.99999...
let numBtnZeroAndTen = randomNum * 11;
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor);

//? Cadenas
let espacio = " "; // una cadena de espacio vacío
let primerNombre = "Asabeneh";
let apellido = "Yetayeh";
let pais = "Finland";
let ciudad = "Helsinki";
let idioma = "JavaScript";
let trabajo = "teacher";
let cita = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotConBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;
let edad2 = 24;
let nombreCompleto = primerNombre + espacio + apellido;
let datosPersonales = "Hola mi nombre es " + primerNombre + " yo vivo en "+ pais + " y tengo la edad de "+ edad2;
console.log(datosPersonales);
//?Cadenas grandes
let parrafo= "Hola mi nombre es Jordi Brando Chavarry De La Cruz.\
            Soy de la ciudad de Trujillo distrito la Esperanza - Perú y\
            estoy empezando en el diseño y programacion web.\
            Mis papás no confian tanto en mi asi que yo les demostrare que puedo lograr\
            lo que me propongo si me esfuerzo y confio en Dios con mucha fe.\
            Espero poder lograr ser un buen desarrollador web que es mi meta\
            en la vida, ya que quiero dejar un legado."
console.log(parrafo);
//? Secuencia de Escape de Lineas
console.log("Espero que todos esten disfrutando de 30DaysOfJavaScript.\n¿Y tu?");
console.log("Días\ttemasEjercicios"); //deja 8 espacios
console.log("Día \t1\t3\t5");
console.log("Día \t2\t3\t5");
console.log("Día \t3\t3\t5");
console.log("Día \t4\t3\t5");
console.log("Este es un símbolo de barra invertida (\\)"); // Para escribir una barra invertida
console.log('Hola a todos mis amigos como estan hoy, hoy veremos como mostrar por consola un "¡Hola mundo!"');
console.log("En todos los lenguajes de programación comienza con '¡Hola, mundo!'");
console.log("El dicho 'Ver para creer' no es correcto en 2022");
//? Literales de Plantilla
let resultado = "La suma de 2 y 3 es 5";
let a = 5;
let b = 5;
console.log(`La suma de ${a} + ${b} es igual a ${a + b}`);
//Ejemplo practico
let espacio2 = " ";
let primerNombre2 = "Asabeneh";
let apellido2 = "Yetayeh";
let pais2 = "Finland";
let ciudad2 = "Helsinki";
let idioma2 = "JavaScript";
let trabajo2 = "profesora";
let edad3 = 24;
let datos1 = primerNombre2 + espacio2 + apellido2;
let datosPersonales1 = `Hola!, mi nombre es ${datos1} vivo en ${pais2} y soy de la ciudad de ${ciudad2}`;
let datosPersonales2 = `Hola!, mi nombre es ${datos1} practico y trabajo en ${idioma2} como ${trabajo2} ademas tengo la edad de ${edad3} años`;
console.log(datosPersonales1);
console.log(datosPersonales2);
//Comparando
let c = 100;
let d = 30;
console.log(`${c} es mayor a ${d} : ${c > d}`); //me arroja a true...

//* METODOS DE CADENAS
//todo: Length(cantidad de caracteres)
let cadena1 = "JavaScript";
console.log(cadena1.length); //cantidad de caracteres

let string = "Chavarry De La Cruz";
console.log(string[9]); //accede a la poscion y a valor de ella...

let string2 = cadena1.length - 2; // de los 10 caracteres que tenemos - 2 serian 8 caracteres
console.log(string2);
console.log(cadena1[string2]); //todo: aqui estamos accediendo ala posicion como arriba restamos -2 entonces la posicion es 8 es como decir "cadena[8]"

//todo: toUpperCase() => a MAYUSCULAS
let cadena2 = "jordi chavarry";
console.log(cadena2.toUpperCase());

let cadena3 = "buenos aires";
console.log(cadena3.toUpperCase());

let cadena4 = "ucrania vs rusia";
console.log(cadena4.toUpperCase());

//todo: toLowerCase() => a minusculas
let cadena5 = "PROGRAMACION";
console.log(cadena5.toLowerCase());

let cadena6 = "PYTHON";
console.log(cadena6.toLowerCase());

let cadena7 = "TU MAMA CALATA";
console.log(cadena7.toLowerCase());

//todo: substr() => Se necesitan dos argumentos, el índice inicial y el número de caracteres para dividir.
let texto = "Pantera";
console.log(texto.substr(3,4 )) // advertencia: esto no esta del todo obsoleto sim embargo casi no se usa

//todo: substring(): Toma dos argumentos, el índice inicial y el índice final, pero no incluye el carácter en el índice final.
let texto2 = "JavaScript";
console.log(texto2.substring(0, 4)); // Java
console.log(texto2.substring(4, 10)); // Script
console.log(texto2.substring(4)); // Script

let country = "Finland";
console.log(country.substring(0, 3)); // Fin
console.log(country.substring(3, 7)); // land
console.log(country.substring(3)); // land