// Build module table (will apply to any table element)
let tableEl = document.getElementsByTagName("table")[0]
if (tableEl != null) {
    // Add header row
    let thead = document.createElement("thead")
    const header = ["Code", "Title", "Credits", "Book"]
    let tr = document.createElement("tr")
    for (const item of header) {
        let th = document.createElement("th")
        th.innerHTML = item
        tr.append(th)
    }
    thead.append(tr)

    // Add table rows
    let tbody = document.createElement("tbody")
    for (const module of modules) {
        tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        td1.innerHTML = module.code
        td2.innerHTML = module.title
        td3.innerHTML = module.credits
        button = document.createElement("button")
        button.className = "book"
        button.innerHTML = "Book"
        td4.append(button)
        tr.append(td1, td2, td3, td4)
        tbody.append(tr)
    }

    tableEl.append(thead)
    tableEl.append(tbody)
}

// Store password in local storage on submit (encoding uncertain)
// Only used in create_password
let pwForm = document.getElementById("set-pw-form")
if (pwForm != null) {
    pwForm.addEventListener("submit", function(ev) {
        ev.preventDefault();
        let pw = document.getElementById("pw").value
        localStorage.setItem("pw", pw)
        window.location = "/3"
    })
}

// "Log in" user if password is correct, throw error if false
// Only used in email_login
let pwEntry = document.getElementById("enter-pw-form")
if (pwEntry != null) {
    pwEntry.addEventListener("submit", function(ev) {
        ev.preventDefault();
        let userInput = document.getElementById("pw").value
        let pw = localStorage.getItem("pw")
    
        if (userInput == pw) {
            window.location = "/5"
        }
        else {
            window.location = "/4"
        }
    })
}

// On submitting modules, check if any are full and route accordingly
let mSubmit = document.getElementById("module-submit")
if (mSubmit != null) {
    mSubmit.addEventListener("click", function(ev) {
        let fullModules = []
        let credits = 0
        let rows = document.getElementsByTagName("tr")
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (row.className == "selected") {
                // I SHALL CLAIM YOUR FIRSTBORN
                let selectedCode = row.firstChild.innerHTML
                for (const module of modules) {
                    if (selectedCode == module.code) {
                        credits += module.credits
                        if (module.full) {
                            fullModules.push(module.code)
                        }
                    }
                }
            }
        }
        // Remember full modules for displaying them later
        localStorage.setItem("fullModules", JSON.stringify(fullModules))
        if ((fullModules.length == 0) && (credits == 12)) {
            window.location = "/6"
        } else if (credits == 12) {
            window.location = "/7"
        } else {
            window.location = "/8"
        }
    })
}

// Select and deselect table buttons
let moduleSelectBtns = document.getElementsByClassName("book")
if (moduleSelectBtns.length > 0) {
    for (let i = 0; i < moduleSelectBtns.length; i++) {
        let btn = moduleSelectBtns[i]
        btn.addEventListener("click", function(ev) {
            btnEl = ev.target
            cell = btnEl.parentElement
            row = cell.parentElement
            if (row.className == "selected") {
                row.className = ""
                btnEl.innerHTML = "Book"
            }
            else {
                row.className = "selected"
                btnEl.innerHTML = "Drop"
            }  
        })
    }
}

// Fill list of full modules
let fullModuleList = document.getElementById("full-modules")
if (fullModuleList != null) {
    fullModulesLoaded = JSON.parse(localStorage.getItem("fullModules"))
    for (module of fullModulesLoaded) {
        let li = document.createElement("li")
        li.innerHTML = module
        fullModuleList.append(li)
    }
}

// Fill confirmation list with elements 5 and 6 of internal module list
let bookedModuleList = document.getElementById("booked-modules")
if (bookedModuleList != null) {
    let li1 = document.createElement("li")
    li1.innerHTML = modules[5].title
    let li2 = document.createElement("li")
    li2.innerHTML = modules[6].title
    bookedModuleList.append(li1, li2)
}

// Build floors
let floorList = document.getElementById("floor-list")
if (floorList != null) {
    let buildingID = localStorage.getItem("building")
    floorAmount = howHighIs[buildingID]

    // Perhaps choose floors before loop, allowing specific additions
    floorChars = choose(Object.keys(floorMap), floorAmount)

    let col1 = document.getElementById("col1")
    let col2 = document.getElementById("col2")

    for (let i = 0; i < floorAmount; i++) {
        let floorChar = floorChars[i]
        
        let floorWord = "Floor"
        rng = Math.random()
        if (rng > 0.8) {
            floorWord = "Level"
        }

        let activeCol = col2
        if (i < (floorAmount / 2)) {
            activeCol = col1
        }

        // Build element
        let floor = document.createElement("p")
        let floorLink = document.createElement("a")
        floorLink.href = "/12"
        floorLink.className = "floor-link"
        floorLink.innerHTML = floorWord + " " + floorChar
        floor.append(floorLink)
        activeCol.append(floor)
    }
}

// Build rooms
let roomList = document.getElementById("room-list")
if (roomList != null) {
    let floorID = localStorage.getItem("floor")
    roomAmount = floorMap[floorID]

    roomsToBuild = choose(rooms, roomAmount)

    let col1 = document.getElementById("col1")
    let col2 = document.getElementById("col2")

    for (let i = 0; i < roomAmount; i++) {
        let room = roomsToBuild[i]
        
        let activeCol = col2
        if (i < (roomAmount / 2)) {
            activeCol = col1
        }

        // Build element
        // No class name needed because clicking a room doesn't fire js
        let roomEl = document.createElement("p")
        let roomLinkEl = document.createElement("a")
        roomLinkEl.href = room.link
        roomLinkEl.innerHTML = room.title
        roomEl.append(roomLinkEl)
        activeCol.append(roomEl)
    }
}

// On building click, save building in local storage
let buildingLinks = document.getElementsByClassName("bldg-link")
if (buildingLinks.length > 0) {
    for (let i = 0; i < buildingLinks.length; i++) {
        let link = buildingLinks[i]
        link.addEventListener("click", function(ev) {
            // Prevent redirect until after we've saved the letter
            ev.preventDefault()
            linkEl = ev.target
            // NB: [0] returns undefined on empty string
            let buildingChar = linkEl.innerHTML[0]
            localStorage.setItem("building", buildingChar)
            window.location = "/11"
        })
    }
}

// On floor click, save floor in local storage
let floorLinks = document.getElementsByClassName("floor-link")
if (floorLinks.length > 0) {
    for (let i = 0; i < floorLinks.length; i++) {
        let link = floorLinks[i]
        link.addEventListener("click", function(ev) {
            // Prevent redirect until after we've saved the letter
            ev.preventDefault()
            linkEl = ev.target
            // Get last char, should be the floor letter (e.g. "A")
            let floorChar = linkEl.innerHTML.slice(-1)
            localStorage.setItem("floor", floorChar)
            window.location = "/12"
        })
    }
}

// Fill a div with disinfectant id with text and a button to disinfect.
let disDiv = document.getElementById("disinfectant")
if (disDiv != null) {
    description = document.createElement("p")
    description.innerHTML = "You find a sign on a dispenser."

    signEl = document.createElement("p")
    signEl.innerHTML = "The plague continues to kill hundreds of people every day! One of the best ways to stop it from spreading and to save lives is to disinfect your hands. Please disinfect your hands below. Brought to you by the University of Grundleplith, Leaders in Alchemy, Transmogrification and the Dark Arts."
    signEl.className = "simple-border"
    disButt = document.createElement("button")
    disButt.innerHTML = "Press to disinfect"
    buttContainer = document.createElement("p")
    buttContainer.append(disButt)

    disButt.addEventListener(
        "click", 
        async function(ev) {
            disDiv = document.getElementById("disinfectant")

            dots = document.createElement("p")
            dots.innerHTML = "..."
            disDiv.append(dots)
            await sleep(1000)
            
            result = document.createElement("p")
            if (Math.random() > 0.1) {
                result.innerHTML = "Nothing happens. It seems the dispenser is empty."
            } else {
                result.innerHTML = "You disinfect your hands."
            }
            disDiv.append(result)
        },
        {once: true}    // Only allow to press once
    )  
    disDiv.append(description, signEl, buttContainer)
}
