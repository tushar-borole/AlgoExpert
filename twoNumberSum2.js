function twoNumberSum(array, targetSum) {
    const hash={}
    for(let i = 0; i < array.length; i++){
        const currentValue = array[i]
        hash[currentValue] = currentValue
        const value = targetSum - currentValue

        if(hash[value] && currentValue!==value){
            return  [currentValue,value]
        }
    }

    return  []
}


twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],10) //?