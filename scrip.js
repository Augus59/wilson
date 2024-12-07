for (let i = 0; i < 5; i++) {
    console.log ("interacion numero: "+i)
}

console.log("---------------------");

let j=0;

while ( j < 5) {
    console.log("iteracion con while: "+j);
    j++;
}

console.log("---------------------");

let edad = 18;

if ( edad >= 18) {
    console.log("ers mayor de edad");
} else{
    console.log("eres menor de edad");
}

console.log("----------------------");

let mensaje = edad >= 18 ? "mayor de edad" : "menor de edad";
console.log(mensaje);