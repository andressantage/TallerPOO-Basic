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

