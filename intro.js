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
    edad: 12,
    sexo: "M",
    esMayorDeEdad: true,
    cedula: 1061707215,
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
    semanasCotizadas: 100,
}   

//condicionales - que tome un camino u otro
//vamos a ver si la persona puede entrar a un bar

let mayoriaEdad = 18;

let edadPersona = persona.edad;

if (edadPersona >= mayoriaEdad){
    console.log("Puede entrar al bar");
}else {
    console.log("No puede entrar al bar");
}

// if con doble condicional - varias condiciones dentro de un condicional

const edadPensionMasculina = 62;
const edadPensionFemenina = 57;

if(persona.edad >= edadPensionMasculina && persona.sexo == "M" && persona.semanasCotizadas >= 1300){
    console.info("Puede Pensionarse");
}else if(persona.edad >= edadPensionFemenina && persona.sexo == "M" && persona.semanasCotizadas >= 1300){
        console.info("Puede Pensionarse");
}else {
    console.error("No Puede Pensionarse"); 
}

//condicional con el operador OR se pone con dos pipes para q la operacion se ejecute si una de las dos es verdadera
//vamos a ver si la persona puede salir del pais o tiene pasaporte o tiene cedula

if(persona.cedula || persona.pasaporte){
    console.log("Puede Salir del Pais");
}else{
    console.log("No Puede Salir del Pais");
}


//condicional Switch case - cuando se quiere evaluar una expresion dentro de una serie de condiciones

let dia = "viernes";

switch(dia){
    case "lunes":
        console.log("Hoy es Lunes");
        break; 
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miercoles":
        console.log("Hoy es miercoles");
        break;
    case "jueves":
        console.log("Hoy es jueves");
        break;
    case "viernes":
        console.log("Porfin es Viernes")
        console.log("Hoy es viernes");
        break;
    case "sabado":
        console.log("Hoy es sabado");
        break;
    case "domingo":
        console.log("Hoy es domingo");
        break;
    default: 
        console.log("No es un día valido")
        break;
}

//operador ternario - es similar al if else solo que usa el signo de interrogacion y dos puntos cuando la operacion es verdadera y cuando es falsa

persona.sexo == "F" ? console.log("Es un Hombre") : console.log("Es una Mujer");

persona.semanasCotizadas >= 1300 && persona.edad >=edadPensionMasculina && persona.sexo == "M" ? console.log("Puede Pensionarse") : console.log("No Puede Pensionarse");

persona.cedula || persona.pasaporte ? console.log("Puede Salir del Pais") : console.log("No Puede Salir del Pais");

//ciclos - estructura de control que me permite escribir menos codigo para hacer tarea que es repetitiva

//Ciclo FOR - sirve para recorrer y mostrar algo 

/* forma no muy buena visualmente
console.log("un elefante se balanceaba");
console.log("2 elefantes se balanceaban");
console.log("3 elefantes se balanceaban");
console.log("4 elefantes se balanceaban");
console.log("5 elefantes se balanceaban"); */


//forma correcta
console.log("un elefante se balanceaba");
for(let contador = 2; contador <=5; contador ++){
    console.log(contador + " elefantes se balanceaban");

    }
    
//for para recorrer un array

for(let i = 0; i< nombres.length; i++){
    console.log(nombres[i]);
}

console.log(nombres[0]); //me muestra el campo 0 y el 3 juan y claudia
console.log(nombres[3]);

//ciclo while o mientras
// ++ incrementa en 1 y +=2 incrementa de a dos

while(persona.edad < 30){
    console.log("para ser treinton te faltan" + (30 - persona.edad) + "años");
    persona.edad++;
}

//ciclo Do while con la diferencia que garantiza la ejecucion del bloque interno al menos una vez -- sirve para los menus

let opcion = 3;

do{
    console.log("Bienvenidos a Mario Kart");
    console.log("1. Jugar");
    console.log("2. Configuracion");
    console.log("3. Multijugador");
    console.log("4. Salir");

    opcion++;

}while(opcion !=4);




