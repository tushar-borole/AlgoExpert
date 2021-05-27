function findThreeLargestNumbers(array) {
    if(array.length ===2){
        return array
    }
    let largestThreeArray = array.slice(0,3).sort((a,b)=>a-b)
    for(let i = 3; i< array.length; i++){
        const currentElement = array[i]
        if(currentElement >largestThreeArray[0]){
            largestThreeArray[0] = currentElement
        }
        largestThreeArray.sort((a,b)=>a-b)//?
    }

    return  largestThreeArray
}

findThreeLargestNumbers([10, 5, 9, 10, 12])//?