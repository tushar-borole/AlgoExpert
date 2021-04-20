function isValidSubsequence(array, sequence) {

    let j = 0
    for(let i = 0; i< array.length; i++){
        let currentElement  = sequence[j]
        if(currentElement === array[i]){
            j++
        }
    }
    return j === sequence.length

}


isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]) //?