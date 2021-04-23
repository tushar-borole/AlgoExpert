function tournamentWinner(competitions, results) {
    const hashPoints = {}

    for(let i = 0; i < competitions.length; i++){
        const currentTeams = competitions[i]
        const winnerTeam = results[i] === 1 ? currentTeams[0] : currentTeams[1]
        if(!hashPoints[winnerTeam]){
            hashPoints[winnerTeam] = 0
        }
        hashPoints[winnerTeam] = hashPoints[winnerTeam] + 3
    }

    const entries = Object.entries(hashPoints).sort((a, b) => b[1] - a[1])//?

    // Write your code here.
    return entries[0][0];
}


tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
],[0, 0, 1])//?