import * as operaciones from './calculadora';

class persona {
    constructor(public nombre: string, public edad: number) {}
    numeroSuerte = (): number => Math.floor(Math.random() * 100);
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años y mi numero de la suerte es ${this.numeroSuerte()}`);
    }


}

//para instanciar una persona

const persona1 = new persona('Juan', 35);
persona1.saludar();

console.log(operaciones.sumar(1, 2));
console.log(operaciones.restar(1, 2));
console.log(operaciones.multiplicar(1, 2));
console.log(operaciones.dividir(1, 2));