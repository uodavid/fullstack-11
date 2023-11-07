class persona {
    //el constructor es el que me permite crear objetos de una clase
    constructor(elNombre, laEdad) {
        this.nombre = elNombre;
        this.edad = laEdad;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}
//aqu estoy creando un objeto de la clase persona
const persona1 = new persona('Juan', 19);
const persona2 = new persona('Javier', 30);


persona1.saludar();
console.log(persona1.nombre);

//hermoso2075