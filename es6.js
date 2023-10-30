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

inicio();


