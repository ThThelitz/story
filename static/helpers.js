// Choose n random elements from array (shuffled)
// Actually, remove random elements until target length is reached
function choose(array, n) {
    rArray = [...array]
    while (rArray.length > n) {
        randomIndex = Math.floor(Math.random() * rArray.length)
        rArray.splice(randomIndex, 1)
    }
    return shuffle(rArray)
}

// Shuffle algorithm, see https://javascript.info/task/shuffle
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
