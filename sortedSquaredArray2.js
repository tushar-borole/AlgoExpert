function sortedSquaredArray(array) {
    const sortedArray = new Array(array.length).fill(0)
    let lowestValueIndex = 0
    let largestValueIndex = array.length - 1

    for(let i = array.length-1; i>=0; i--){
        const lowestValue = array[lowestValueIndex]
        const largestValue = array[largestValueIndex]

        if(Math.abs(lowestValue) > Math.abs(largestValue)){
            sortedArray[i] = lowestValue * lowestValue
            lowestValueIndex++;
        }else{
            sortedArray[i] = largestValue * largestValue
            largestValueIndex--;
        }

    }
    return sortedArray
}


sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])//?
