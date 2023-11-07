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

//creo una nueva clase llamada empleado extender o heredar los atributos de la clase persona

class empleado extends persona {
    #sueldo;
    constructor(nombre, edad, sueldo) {
        super(nombre, edad);
        this.#sueldo = sueldo;
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.getNombre()} y tengo ${this.getEdad()} años y mi sueldo es ${this.#sueldo} dolares`); 
    }
}


class cliente extends persona { 
    #numeroCuenta;
    #saldoCuenta;

    constructor(nombre, edad, numeroCuenta, saldoCuenta) {
        super(nombre, edad);
        this.#numeroCuenta = numeroCuenta;
        this.#saldoCuenta = saldoCuenta;
    }
    //creamos metodo saludar
    saludar(){
        console.log(`Hola mi nombre es ${this.getNombre()} y tengo ${this.getEdad()} años y el numero de mi cuenta es ${this.#numeroCuenta} `); 
    }

    depositar(monto) {
        this.#saldoCuenta += monto;
    }

    retirar(monto) {
        this.#saldoCuenta -= monto;
    }

    getSaldo() {
        return this.#saldoCuenta;
    }

    setSaldo(nuevoSaldo) {
         this.#saldoCuenta = nuevoSaldo;
    }



}

//aqu estoy creando un objeto de la clase persona
const persona1 = new persona('Juan', 19);
const persona2 = new persona('Javier', 30);


persona1.saludar();
console.log(persona1.getNombre());
persona1.setEdad (20);
persona1.saludar();

const gerente = new empleado('juan', 35, 5000);
gerente.saludar();

const clienteDelMes = new cliente('Javier', 35, 1061707215, 0);
clienteDelMes.saludar();
clienteDelMes.depositar(1000);
console.log(clienteDelMes.getSaldo());
clienteDelMes.retirar(600);
console.log(clienteDelMes.getSaldo());

//ejemplo 2
//polimorfismo - modificar el comportamiento de un metodo o sobreescribirlo para q haga algo diferente 

class formaGeometrica {
    area() {
        //metodo sin implementacion especifica
    }
}

class circulo extends formaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    area() {
        return Math.PI = this.radio = this.radio;
    }
}

class rectangulo extends formaGeometrica {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    area() {
        return this.ancho * this.alto;
    }
}




//hermoso2075