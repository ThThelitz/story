// Choose n random elements from array (shuffled)
// Actually, remove random elements until target length is reached
function choose(array, n) {
    rArray = [...array]
    while (rArray.length > n) {
        randomIndex = Math.floor(Math.random() * rArray.length)
        rArray.splice(randomIndex, 1)
    }

    // Goal room appears on floor G (hopefully only there?)
    if (localStorage.getItem("floor") === "G") {
        rArray[0] = new Room("LH45957", "/14")
    }

    // Shuffle algorithm, see https://javascript.info/task/shuffle
    rArray.sort(() => Math.random() - 0.5)
    return rArray
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
