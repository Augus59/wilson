let sump = 0;
let sumi = 0;
for (let i = 1; i < 10; i++) {
    if ( i % 2 == 0 ) {
        console.log("par: "+i);
        sump += i;
    }
    else{
        console.log("impar: "+i);
        sumi += i;
    }
}

console.log("la suma de los numeros pares es: "+sump);
console.log("la suma de los numeros impares es: "+sumi);