function firstNonRepeatingCharacter(string) {
    const stringToArray = string.split("")
    let map = new Map()

    for(let [index,value] of stringToArray.entries()){
        if(!map.has(value)){
            map.set(value,1)
            continue
        }
        map.set(value,map.get(value) +1)
    }

    for(let [key,value] of map){
        if(value === 1){
            for(let [index, val] of stringToArray.entries()){
                if(key === val){
                    return index
                }

            }
        }
    }
    return -1;
}

firstNonRepeatingCharacter("abcdcaf")//?
