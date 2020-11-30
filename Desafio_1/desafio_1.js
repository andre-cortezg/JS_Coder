alert ('Esta calculadora te ayudara a obtener el area de un terreno');
let B = prompt('Ingrese el valor de la base mayor B, en metros');
let b = prompt('Ingrese el valor de la base menor b, en metros');
let h = prompt('Ingrese el valor de la distancia h en metros');

let resultado = ((B + b) * h)/2;

document.write ('Tu terreno tiene un area de ' + resultado + ' m2');

