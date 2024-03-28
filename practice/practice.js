// Practicando lo aprendido
let nombre = "Jordi";
console.log(nombre);

let interpolando = `Mi nombre es ${nombre}`;
console.log(interpolando);

let lista = {
    nombre1 : "Jose",
    apellido : "Chavez",
    edad : 24
}
let lista1 = lista;
console.log(lista == lista1);

//Metodos matematicos
let arreglo = ["gallina","pollo","gallo","oveja"];
arreglo[2] = "asno";
console.log(arreglo);

let numero = 12.36;
console.log(Math.round(numero));
console.log(Math.ceil(numero));
console.log(Math.floor(numero));
console.log(Math.min(-8,14,256,-782,1,78));
console.log(Math.max(-8,14,256,-782,1,78));
console.log(Math.abs(-856));
console.log(Math.sqrt(16));
console.log(Math.E);
console.log(Math.pow(3, 10))
console.log(Math.random());
console.log(Math.floor(Math.random() * 11));

let texto = "Hola mi nombre es Jordi, soy nuevo en \
            desarrollo web espero poder dominar las tecnologias \
            web como html, css y mas JavaScript ya q en JS es \
            el lenguaje q tanto me cuesta aprender pero se que \
            que lo lograre";
console.log(texto);

//Metodos de Cadenas
let texto2 = "Chavarry";
console.log(texto2.length);

let texto3 = "Hipopotamo";
let posicion = texto3.length - 4;
console.log(texto3[posicion]);

let texto4 = "yo soy un programador";
console.log(texto4.toUpperCase());

let texto5 = "YO SOY UN PROGRAMADOR"
console.log(texto5.toLocaleLowerCase())

let texto6 = "Python";
console.log(texto6.substring(2,6));
console.log(texto6.substring(1,0));

let texto7 = "Hoy aprendere Programacion";
console.log(texto7.split(" "));
let texto8 = "Esperanza";
console.log(texto8.split(""));
let texto9 = "Si,tengo,una,ardilla,que,habla,entonces,es,magico";
console.log(texto9.split(","));

let texto10 = "    -JORDI CHAVARRY-    ";
console.log(texto10.trim())