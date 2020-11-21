// Booleal
let muted: boolean = true;
muted = false;

// Números
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = "Carlos";
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];

let peopleAndNumber: Array< string | number > = [];
peopleAndNumber.push("Ricardo");
peopleAndNumber.push(9000);

// Enum
enum Color {
    Rojo = "Rojo",
    Verde =  "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = {
    type: "Wildcard"
}

// Object
let someObject: object = {
    type: "Wildcard"
}