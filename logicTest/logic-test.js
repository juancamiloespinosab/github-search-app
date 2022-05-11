let unavailableItems = [
    { startPx: 10, endPx: 30 },
    { startPx: 55, endPx: 65 },
    { startPx: 35, endPx: 50 },
    { startPx: 20, endPx: 40 },
    { startPx: 60, endPx: 70 },
]

// let unavailableItems = [
//     { startPx: 10, endPx: 30 },
//     { startPx: 55, endPx: 65 },
//     { startPx: 35, endPx: 50 },
//     { startPx: 1, endPx: 9 },
//     { startPx: 90, endPx: 100 },
//     { startPx: 20, endPx: 40 },
//     { startPx: 75, endPx: 90 },
//     { startPx: 60, endPx: 70 },
// ]

const mergeOverlappingItems = (arrayItems) => {

    let orderedArray = arrayItems.sort((a, b) => a.startPx - b.startPx); // Ordenar array original por el campo "startPx" de menor a mayor
    let i = 0; // Inicializar en 0 el indice iterador

    /* 
        *   Iterar el array ordenado "orderedArray"
        *   Se compara el primer elemento con el segundo del array y en caso de sobreponeresen, se fusionan
    */
    for (i; i < orderedArray.length; i++) {

        if (i + 1 == orderedArray.length) return orderedArray; // Salir de la función cuando se llegue al ultimo item;

        if (orderedArray[i].endPx >= orderedArray[i + 1].startPx) {

            mergedItem = { startPx: Math.min(orderedArray[i].startPx, orderedArray[i + 1].startPx), endPx: Math.max(orderedArray[i].endPx, orderedArray[i + 1].endPx) }

            break;
        }

    }

    //se eliminan los dos items que se compararon y fusionaron anteriormente
    orderedArray.splice(i, 2);

    return mergeOverlappingItems([mergedItem, ...orderedArray])
}

console.log('Resultado: ', mergeOverlappingItems(unavailableItems));