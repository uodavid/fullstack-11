//retornos en una funcion

let month = "october";
let passPort = "1061707215";

function inicio(){ //una funcion mas grande llamada inicio 

    //funcion tradicional
    function saludar(nombre) {
        return "hola " + nombre;
    }
    
    //funcion flecha o arrow function
    const saludar2 = (nombre) => `hola ${nombre}`;

    const calcularNacimiento = (edad) => 2023 - edad;
    
    let nombrePersona = prompt("ingresa tu nombre");

    
    
    let edadPersona = prompt("ingresa tu edad");
    let resultadoCalculo = calcularNacimiento(edadPersona);
    
    //let result = resultadoSaludo + " tu año de nacimiento es " + resultadoCalculo;// hace lo mismo ue el de abajo pero se ve mas bonito

    //esto e sun template literal o string

    let result = `${saludar (nombrePersona)} tu año de nacimiento es ${resultadoCalculo}`; 

    console.log(result);
}

//inicio();

//IIFE expresiones de funcion inmediatamente invocadas
//cuando tenemos una funcion q se llame una vez pero que se llame cuando cargo la pagina

(function(){ 
    let month = "november";
    let identification = "1061707215"
    console.log(`Hola mundo ${month} ${identification} ${passPort}`);
})();


//ARRAYS

const arraysMethods = () => {

const baloto = [18, 28, 57, 12, 56, 87, 1, 28];
console.log(baloto);

//agregar un elemento al final del array 
baloto.push(30);
console.log(baloto);

//para agregar al inicio se hace con la funcion UNSHIFT
baloto.unshift(100);
console.log(baloto);

//eliminar un elemnto del array 

baloto.pop();
console.log(baloto);

//eliminar el primer elemento del array
baloto.shift();
console.log(baloto);

//si quiero que todos los elementos del arrays los multiplique por 2 

//map retornamos el valor en una variable

const array2 = baloto.map((item) => item = item * 2);
console.log(array2);


//for each no podemos retornar el valor en una variable

baloto.forEach((el) => {
    console.log(el);
});




//metodo filter filtra los elementos de un array que cumplen una condicion

const filteredNumbers = baloto.filter((el) => el >= 30);
console.log(filteredNumbers);
}

arraysMethods ();

//console.log(identification);


//HOISTING significa cuando la svariables o el codigo se elevan a la parte superior cuando se va a ejecutar el codigo al ambito javascript

const HOISTING = () => {

    const year = 2023;

    console.log(year);
    
    const testFunction = () => {
        console.log("Soy una función de prueba");
    }
    
    testFunction();
    
}

HOISTING ();

//callback - son una funcion que se pasa como parametro de otra funcion

//primer metodo

const demoCallback = () => {

    const saludar = (funcion) => {
        console.log("Hola Mundo");
        funcion();
    }

const despedir = () => {
    console.log("Adios");
}

saludar(despedir);

const timer = (fn) => {
    console.log("la siguiente funcion se ejecutara en 5 segundos");
    setTimeout (fn, 5000); //es una funcion de javascript nativa que tiene dos parametros el primero es el callback y el segundo parametro es cuanto tiemo en milisegundos va pasar para que se ejecute 
}

timer(despedir);

setTimeout (() => {
    console.log("Han pasado 4 segundos");
    console.log("Hola Mundo");
} , 4000);

}

demoCallback();















