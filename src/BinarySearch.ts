function binarySearch(array: number[], value: number) {
    let lo = 0
    let hi = array.length
    let count = 0

    do {
        const m = Math.floor(lo + (hi - lo) / 2) //Tbn Entero inferior de la mitad del rango, desplazado por lo
        const v = array[m] //Tbn La mitad del array

        if (v === value) { //Tbn Caso donde se encuentra el valor
            return true
        } else if (v > value) { //Tbn Caso donde el rango es mayor que el valor
            hi = m  // Tbn Se configura la mitad anterior como el high para restringir el rango
        } else {    // Tbn Caso donde aún no se encuentra el valor
            lo = m + 1 //Tbn se configura el low como el valor después de la mitad anterior
        }
        count += 1
        console.log(count)
    } while (lo < hi) //Tbn Se repite hasta que haya return true o cuando el low llegue al high anterior

    return false
}

export function run() {
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 90)) // true
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 91)) // false
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 69420))
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 1))
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 0))
}