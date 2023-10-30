//retornos en una funcion


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
    console.log("Hola mundo");
})()


//ARRAYS

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





