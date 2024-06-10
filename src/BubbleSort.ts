function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log('i:', i)
        for (let j = 0; j < arr.length - 1 - i; j++) { //Tbn Aquí se resta i porque en cada paso, el mayor se va consolidando en el último puesto
            console.log('j:', j)
            console.log('arr[j]: ', arr[j], 'arr[j+1]: ', arr[j+1])
            if (arr[j] > arr[j+1]) {    //Tbn si j es mayor que el siguiente, entonces se intercambia
                const tmp = arr[j]      //Tbn Se guarda j en una var temporal para poder hacer el cambio
                arr[j] = arr[j+1]       //Tbn Se asigna el valor de j+1 a j
                arr[j+1] = tmp          //Se pone en j+1 el valor que estaba en j
                console.log('swap!')
            }
        }
    }
    return arr
}

console.log(bubbleSort([5,4,7,3,8,6,2,1,9,0]))