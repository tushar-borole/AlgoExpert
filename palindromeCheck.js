function isPalindrome(string) {
    if(string.length === 1){
        return true
    }
    let inputArray = string.split("")
    let i = 0;
    let j = inputArray.length - 1
    let out = true

    while (i<j){
        if(inputArray[i]!==inputArray[j]){
            out =  false
            break
        }
        i++
        j--
    }
    return out
}


isPalindrome('aba')//?
