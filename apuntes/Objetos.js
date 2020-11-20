// Ineficiente por crear varias funciones que hacen lo mismo
/* const zelda = {
    name: "Zelda"
}

zelda.saludar = function() {
    console.log(`Hola soy ${this.name}`);
}

zelda.saludar();

const link = {
    name: "Zelda"
}

link.saludar = function() {
    console.log(`Hola soy ${this.name}`);
}

link.saludar(); */

// Ineficiente porque cada que llamamos a Hero se redefine la función saludar
/* function Hero(name) {
    
    const hero = {
        name: name
    }

    hero.saludar = function() {
        console.log(`Hola soy ${this.name}`);
    }

    return hero;

}

const zelda = Hero("Zelda");
zelda.saludar();

const link = Hero("Link");
link.saludar(); */

// Todavía hay mejores formas...
/* const heroMethods = {
    saludar: function() {
        console.log(`Hola soy ${this.name}`);
    }
}

function Hero(name) {
    
    const hero = {
        name: name
    }

    hero.saludar = heroMethods.saludar;

    return hero;

}

const zelda = Hero("Zelda");
zelda.saludar();

const link = Hero("Link");
link.saludar(); */

// Esto empieza a usar herencia prototipal con Object.create
/* const heroMethods = {
    saludar: function() {
        console.log(`Hola soy ${this.name}`);
    }
}

function Hero(name) {
    
    // Crea un nuevo objeto a partir del objeto dado, es decir, todas las propiedades de HeroMethods pasan a ser de hero
    const hero = Object.create(heroMethods);
    hero.name = name;
    return hero;

}

const zelda = Hero("Zelda");
zelda.saludar();

const link = Hero("Link");
link.saludar(); */

// Esta es la forma en como funciona realmente una clase en javascript
/* function Hero(name) {
    
    // Aquí básicamente estamos usando Hero para retornar un nuevo objeto (Creado por Object.create) a partir de los prototype de esta clase
    const hero = Object.create(Hero.prototype);
    hero.name = name;
    return hero;

}

Hero.prototype.saludar = function() {
    console.log(`Hola soy ${this.name}`);
}

const zelda = Hero("Zelda");
zelda.saludar();

const link = Hero("Link");
link.saludar(); */

// Usar new es una suggar syntax de lo anterior, new creará el objeto, pero en lugar de crearlo dentro de hero, lo creara dentro de this y el return ya o hace automáticamente
function Hero(name) {
    this.name = name;
}

Hero.prototype.saludar = function() {
    console.log(`Hola soy ${this.name}`);
}

const zelda = new Hero("Zelda");
zelda.saludar();

const link = new Hero("Link");
link.saludar();