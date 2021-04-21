function sortedSquaredArray(array) {

    let sortedSquare = []

    for(let i = 0; i < array.length; i++){
        sortedSquare.push(array[i]*array[i])
    }

    return sortedSquare.sort((a,b)=> a - b )
}


sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])//?
