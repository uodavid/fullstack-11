class persona {

    //atributos
    //para proteger los atributos usamos el signo # antes de cada atributo
    #nombre;
    #edad;

    //el constructor es el que me permite crear objetos de una clase
    constructor(elNombre, laEdad) {
        this.#nombre = elNombre;
        this.#edad = laEdad;

    }

    saludar(){
        console.log(`Hola mi nombre es ${this.#nombre} y tengo ${this.#edad} años`);
    }
    //encapsulamiento es tener los atributos de una clase pribvados y solo poder leerlo o cambiarles el valor por medio de un get o un set
    //metodo get
    getNombre() {
        return this.#nombre;
    }

    //metodo set
    setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    //metodo get
    getEdad() {
        return this.#edad;
    }
    //metodo set
    setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
}

}
//aqu estoy creando un objeto de la clase persona
const persona1 = new persona('Juan', 19);
const persona2 = new persona('Javier', 30);


persona1.saludar();
console.log(persona1.getNombre());
persona1.setEdad (20);
persona1.saludar();


//hermoso2075