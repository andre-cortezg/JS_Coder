// Numero par o impar
let n = prompt('Hasta que numero queres evaluar?');

for (let i = 1; i <= n; i++){
    if (i % 2 === 0) {
        console.log('El numero ' + i + ' es PAR' );
    } else {
        console.log('El numero ' + i + ' es IMPAR' );
    }
}