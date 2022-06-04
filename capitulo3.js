class animal{
    //Constructor
    constructor(especie, edad, color){
        console.log("especie: " + especie);
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `especie: ${this.especie}, edad: ${this.edad}, color: ${this.color}. <br>`;
    }
    //Metodo
    verInfo(){
        document.write(this.info);
    }
}

class perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }

    verInfo(){
        document.write(`especie: ${this.especie}, edad: ${this.edad},
         color: ${this.color}, raza: ${this.raza}. <br>`);
    }
}

class Celular{
    constructor(nombre, color, peso, resPantalla, resCamara, ram){
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.resPantalla = resPantalla;
        this.resCamara = resCamara;
        this.ram = ram;
    }
    caracteristicas(){
        document.write(`Nombre: ${this.nombre} <br>
                        Color: ${this.color} <br>
                        Peso: ${this.peso} <br>
                        Resolucion pantalla: ${this.resPantalla} <br>
                        Resolucion camra: ${this.resCamara} <br>
                        Ram: ${this.ram} <br>
                        ----------------------------------------------<br><br>`)

    }
    encender(){
        alert("Encendido dispositivo");
    }
    reiniciar(){
        alert("Reiniciando dispositivo");
    }
    apagar(){
        alert("apagando dispositivo")
    }
}
tamaño = prompt("numero de celulares: ")
let celulares = new Array(parseInt(tamaño));
for(let i = 0; i<celulares.length; i++){
    let nombre = prompt("Nombre del celular " + (i+1));
    let color = prompt("Color del celular " + (i+1));
    let peso = prompt("Peso del celular " + (i+1));
    let resPantalla = prompt("resolucion pantalla del celular " + (i+1));
    let resCamara = prompt("resolucion camara del celular " + (i+1));
    let ram = prompt("Ram del celular " + (i+1));    
    celulares[i] = new Celular(nombre, color, peso, resPantalla, resCamara, ram);
}

for(let celular of celulares){
    celular.caracteristicas();
}