function twoCrystalBalls(array: boolean[]) {
    const jmpSize = Math.floor(Math.sqrt(array.length)); // Tbn se fracciona el array en fragmentos de raíz de n. Por ejm raiz de 100 es 10
    console.log(`jmpSize = ${jmpSize}`)
    let i = jmpSize
    for (; i < array.length; i += jmpSize) { //Tbn Recorre el array avanzando tramos de raíz de n
        console.log(`i = ${i}`) //Tbn se añade para control
        if (array[i]) { //Tbn El array tiene todo True a partir de cierto valor, si se encuentra uno, se rompe
            break
        }
    }

    i -= jmpSize //Tbn Como ya encontró el True, entonces se debe devolver al salto anterior para recorrer lineal desde ahí
    for (let j = 0; j < jmpSize && i < array.length; j++, i++) { //Tbn Acá se recorre lineal máximo el tamaño del jmpSize y mínimo hasta encontrar el fin del array (cuando aplique)
        console.log(`i_lineal = ${i}`) //Tbn se añade para control
        if (array[i]) {
            return i    // Si encuentra el primer True, retorna su posición
        }
    }

    return -1   //Tbn si no retorna, entrega -1
}

// function twoCrystalBalls(breaks) {
//     const jmpAmount = Math.floor(Math.sqrt(breaks.length));

//     let i = jmpAmount;
//     for (; i < breaks.length; i += jmpAmount) {
//         if (breaks[i]) {
//             break;
//         }
//     }

//     i -= jmpAmount;
//     for (let j = i; j < breaks.length; j++) {
//         if (breaks[j]) {
//             return j;
//         }
//     }
//     return -1;
// }

export function run() {         //Tbn Estos ejemplos no están bien del todo, porque no rellenan de True hasta el final
    const a = Array(105).fill(false)
    a[103] = true
    console.log(twoCrystalBalls(a))

    const b = Array(10000).fill(false)
    b[9999] = true
    console.log(twoCrystalBalls(b))

    const c = Array(100000).fill(false)
    console.log(twoCrystalBalls(c))

    // Tbn Ejemplo añadido rellenando con true
    const d = Array(500).fill(false)
    for(let i=325; i < d.length; i++){
        d[i] = true;
    }
    console.log(twoCrystalBalls(d))
}