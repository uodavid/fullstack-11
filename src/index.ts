import * as operaciones from './calculadora';
import  Empleado from './empleado';

class persona {
    constructor(public nombre: string, public edad: number) {}
    numeroSuerte = (): number => Math.floor(Math.random() * 100);
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años y mi numero de la suerte es ${this.numeroSuerte()}`);
    }


}


class EmpleadoImpl implements Empleado {
    constructor(public nombre: string, public salario: number) {}
    pedirAumento = (): void => {
        console.log('Necesito un aumento jefe');

    }

    getAntiguedad = (): number => 10;

}

const empleado1 = new EmpleadoImpl('Javier', 1000);
empleado1.pedirAumento();


//para instanciar una persona

const persona1 = new persona('Juan', 35);
persona1.saludar();

console.log(operaciones.sumar(1, 2));
console.log(operaciones.restar(1, 2));
console.log(operaciones.multiplicar(1, 2));
console.log(operaciones.dividir(1, 2));