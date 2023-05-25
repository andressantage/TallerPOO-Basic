let nombre
let edad
let sexo
let persona1
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombre = document.getElementById('nombre').value;
    edad = document.getElementById('edad').value;
    sexo = document.getElementById('sexo').value;
    persona1=new Persona(nombre,edad,sexo);
    document.getElementById("saludo").textContent="Resultado: "+persona1.saludar()
    console.log(persona1.saludar())
});

class Persona{
    nombre;
    edad;
    sexo;
    constructor(nombre,edad,sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }
    saludar(){
        return `Hola ${this.nombre} buen dia` 
    }
    static esMayorDeEdad(){
        if(this.edad>=18){
            return true;
        }else{
            return false;
        }
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,sexo,carrera){
        super(nombre,edad,sexo)
        this.carrera=carrera;
    }
    estudiar(){
        return `La persona ${this.nombre} estudia ${this.carrera}` 
    }
}

document.getElementById('miFormulario1').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let carrera = document.getElementById('carrera').value;

    let estudiante1=new Estudiante(nombre,edad,sexo,carrera);
    document.getElementById("imprimirSaludo").textContent=estudiante1.saludar()
    document.getElementById("imprimirCarrera").textContent=estudiante1.estudiar()
});

document.getElementById('miFormulario2').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById("imprimirResEdad").textContent=Persona.esMayorDeEdad(persona1.edad)
});
///////////
class Animal{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    hacerSonido(){
        return `Sonido del animal ${this.nombre} es` 
    }
}
let animal1
let nombreAnimal
let edadAnimal
document.getElementById('miFormulario3').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombreAnimal = document.getElementById('nombreAnimal').value;
    edadAnimal = document.getElementById('nombreAnimal').value;
    animal1=new Animal(nombreAnimal,nombreAnimal);
    document.getElementById("imprimirSonidoAnimal").textContent=animal1.hacerSonido()
});

class Perro extends Animal{
    constructor(nombre,edad,raza){
        super(nombre,edad)
        this.raza=raza;
    }
    moverCola(){
        return `El perro ${this.nombre} con edad de ${this.edad} y raza ${this.raza} está moviendo la cola.` 
    }
}
let perro1
let nombrePerro
let edadPerro
let raza
document.getElementById('miFormulario4').addEventListener('submit', function(event) {
    event.preventDefault(); 
    nombrePerro = document.getElementById('nombrePerro').value;
    edadPerro = document.getElementById('edadPerro').value;
    raza = document.getElementById('raza').value;
    perro1=new Perro(nombrePerro,edadPerro,raza);
    document.getElementById("imprimirPerro").textContent=perro1.moverCola()
});


