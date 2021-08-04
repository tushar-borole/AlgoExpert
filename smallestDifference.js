function smallestDifference(arrayOne, arrayTwo) {
    const hash = {}
    for(let outer of arrayOne){
        for(let inner of arrayTwo) {
          const difference = Math.abs(outer-inner)
            hash[difference] = [outer,inner]
        }
    }

    const leastDifference = Object.keys(hash).map(val=>parseInt(val)).filter(val => val>=0).sort((a,b)=>a-b)[0]
    return hash[leastDifference]
}


smallestDifference([-1,5,10,20,28,3],[26,134,135,15,17])//?

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
