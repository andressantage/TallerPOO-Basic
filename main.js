document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;

    let persona1=new Persona(nombre,edad,sexo);
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
}
