function twoNumberSum(array, targetSum) {
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] + array[j] === targetSum){
                return [array[i],array[j]]
            }
        }
    }

    return  []
}


twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],10)

