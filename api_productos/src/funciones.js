// funciones.js

// Sumar todos los números del array
function sumarNumeros(array) {
    return array.reduce((acc, num) => acc + num, 0);
}

// Encontrar el número mayor del array
function numeroMayor(array) {
    return Math.max(...array);
}

// Ordenar textos alfabéticamente
function ordenarTextos(array) {
    return array.sort((a, b) => a.localeCompare(b));
}

// Filtrar números mayores que un valor
function filtrarMayores(array, minimo) {
    return array.filter(num => num > minimo);
}

// Exportar las funciones
module.exports = { sumarNumeros, numeroMayor, ordenarTextos, filtrarMayores };