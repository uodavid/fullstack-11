//formas de crear una variable
//Tipos de datos primitivos//

elNombre= "Juan";

var primerNombre = "Juan"; //var ya no se utiliza

let segundoNombre = "David"; //se puede reasignar

const apellido = "Uribe"; // no se puede reasignar

//Tipos de datos Primitivos

//string

let nombre = "Juan David uribe";

let direccion = "carrera 7A # 33N 49";

let correo = "uodavid@unicauca.edu.co"

//number

let edad = 25;
let peso = 75.8;
let telefono = 3012616590;

//boolean -- verdadero o falso

let esMayorDeEdad = true;

let esMenorDeEdad = false;

//undefined -- variables sin valor

let reporteDatacredito = undefined;

let reporteSisben;

//null --tiene un valor pero el valor es vacio

let puntajeDatacredito = null;

//symbol -- se usa para crear un valor unico e inmutable - no se usa mucho

/////DATOS COMPUESTOS o TIPOS DE DATOS COMPUESTOS//
//Son los que contienen mas datos//

//array - es un tipo de dato que permite almacenar muchos elementos
//se usa cuando se quiere agrupar varios elementos en un tipo de dato//

let nombres = ["Juan", "Daniela", "Javier", "Claudia", "Lina"];
let edades = [25, 30, 20, 18];
let baloto = [1, 2, 3, 14, 25, 56];
let datos = ["Juan", 25, true, null];

//Objetos - objects - funcionan con atributo-valor atributo-valor

let persona = {
    nombre: "Juan",
    edad: 25,
    esMayorDeEdad: true,
    puntajeDatacredito: null,
    reporteSisben: undefined,
    coloresFavoritos: ["rojo", "verde", "azul"],
    fechaDeNacimiento: {
        dia: 3,
        mes: 2,
        anio: 1988
    },
    fechaExpedicion: "2006-05-04",
    fechaVencimiento: new Date("2025-05-04"),
}   

//condicionales - que tome un camino u otro
//vamos a ver si la persona puede entrar a un bar

let mayoriaEdad = 18;

let edadPersona = persona.edad;

if (edadPersona >= mayoriaEdad){
    console.log("Puede entrar al bar");
}

