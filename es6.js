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


//setinterval es una funcion que se va ejecutando asi misma asi misma hasta que uno la mate cada cierto tiempo.
const seDespideMasQueCirco = setInterval(despedir, 2000);

//detener un intervalo 

const intervalo = setInterval(() => {
    console.log("Universidad");
}, 1000);

//set timeout llama a clearinterval y mata ese intervalo

setTimeout (() => {
    clearInterval(intervalo);
    clearInterval(seDespideMasQueCirco);
}, 6000);

//poner un reloj en la consola javascript

/*const reloj = setInterval(() => {
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds()}`);
    
})*/

}

//demoCallback();

//PROMESAS

const demoPromesas = () => {

    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("la promesa se resolvio a los 2 segundos");
        }, 2000);
    })

    promesa
    .then((Response) => console.log(Response))
    .catch((error) => console.log(error));


    let promesa2 = new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 10);
        if(number % 2 === 0) {
            resolve(number);
        } else {
            reject(number);
        }
    });

    promesa2
    .then((response) => console.info(`el número ${response} es par`))
    .catch((error) => console.error(`el numero ${error} es impar`));
}

demoPromesas();

//MULTIPLES PROMESAS RESUELVA TODAS LAS PROMESAS

const multiplesPromesas = () => {
    
    const getJugadores = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Traje los datos de la API de la seleccion en 2 segundos");
        }, 2000);
    }) 

    const saveStatsDB = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("guarde las estadisticas de la Base de Datos en 3 segundos");
        }, 3000);
    }) 

    const esportToExcel = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Exporte el archivo en excel en 4 segundos");
        }, 4000);
    }) 
    

    Promise.all([getJugadores, saveStatsDB, esportToExcel])
    .then((response) => console.info(response))
    .catch((error) => console.error(error));
}

multiplesPromesas();


//promesa con sync Await - es un codigo mas corto
const demoAsyncAwait = async () => {
    const getEstadios = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Traje los datos de los estadios API de la seleccion en 5 segundos");
        }, 5000);
    })

const responseAPIEstadios = await getEstadios;
console.log(responseAPIEstadios);

const saveStadiumsDB = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Guarde los estadios en la base de datos en 6 segundos");
        }, 6000);
    })

const responseDBStadiums = await saveStadiumsDB; 
console.log(responseDBStadiums);

const exportToExcel = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Exporte el archivo en 7 segundos");
    }, 7000);
    })

const responseExcel = await exportToExcel; 
console.log(responseExcel);
    
}

demoAsyncAwait();















