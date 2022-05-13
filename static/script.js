class Module {
    constructor(code, title, credits, full=true) {
        this.code = code
        this.title = title
        this.credits = credits
        this.full = full
    }
}

let modules = [
    new Module("0001", "Module1", 4, full=false),
    new Module("0002", "Module2", 4, full=false),
    new Module("0003", "Murderers and Degenerates", 4),
    new Module("0004", "Module4", 4),
    new Module("0005", "Module5", 4),
    new Module("0006", "Module6", 6, full=false),
    new Module("0007", "Module7", 6, full=false),
    new Module("0008", "Module8", 6),
    new Module("0009", "Module9", 6)
]

// Build table
// Will apply to any table element
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
        let rows = document.getElementsByTagName("tr")
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (row.className == "selected") {
                // I SHALL CLAIM YOUR FIRSTBORN
                let selectedCode = row.firstChild.innerHTML
                for (const module of modules) {
                    if (selectedCode == module.code) {
                        if (module.full) {
                            window.location = "/6"
                            return
                        }
                    }
                }
            }
            
        }
        // If all selected modules are not full
        window.location = "/7"
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

