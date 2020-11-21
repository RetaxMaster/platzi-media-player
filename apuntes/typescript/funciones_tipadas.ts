import { create } from "domain";

// Funciones
function add(a:number, b: number): number {
    return a + b;
}

const sum: number = add(4, 6);

// así definimos que se regresa una función
function createAdder(a:number): (number) => number {
    return function(b:number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// Con el simbolo de interrogación podemos decir que es opcional
/* function fullName(fisrtName:string, lastName?: string) : string {
    return `${fisrtName} ${lastName}`;
}

const carlos = fullName("Carlos"); */

// Y así podemos poner un valor por defecto
function fullName(fisrtName:string, lastName: string = "Smith") : string {
    return `${fisrtName} ${lastName}`;
}

const carlos = fullName("Carlos");