//Codigo del cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimentroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimentroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El perimetro del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

//Codigo del triangulo

console.group("Triangulo");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + " cm, " 
    + ladoTriangulo2 
    + " cm, " 
    + baseTriangulo
    + " cm"
    );
 */
/* const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm"); */

function perimetroTrangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("el perimetro del triangulo es: " + perimetroTrangulo + " cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("el area del triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Codigo del circulo

console.group("Circulo");

const PI = Math.PI;
console.log("el valor de PI es: " + PI);


//const radioCirculo = 4;
//console.log("el radio del circulo es: " + radioCirculo + " cm");

function diametroCirculo(radio){
    return radio*2;
}
//console.log("el diametro del circulo es: " + diametroCirculo + " cm");

function perimetroCirculo(radio){
    return diametroCirculo(radio) * PI;
}
//console.log("el perimetro del circulo es: " + perimetroCirculo + " cm");

function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("el area del circulo es: " + areaCirculo + " cm^2");
