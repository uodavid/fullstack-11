//retornos en una funcion
function inicio(){ //una funcion mas grande llamada inicio 

    function saludar(nombre) {
        return "hola " + nombre;
    }
    
    function calcularNacimiento(edad) {
        return 2023 - edad;
    }
    
    let nombrePersona = prompt("ingresa tu nombre");
    let resultadoSaludo = saludar (nombrePersona);
    
    
    let edadPersona = prompt("ingresa tu edad");
    let resultadoCalculo = calcularNacimiento(edadPersona);
    
    //let result = resultadoSaludo + " tu año de nacimiento es " + resultadoCalculo;// hace lo mismo ue el de abajo pero se ve mas bonito

    //esto e sun template literal o string

    let result = `${resultadoSaludo} tu año de nacimiento es 
    ${resultadoCalculo}`; 

    console.log(result);
}

inicio();


