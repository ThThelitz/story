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

let moduleSelectBtns = document.getElementsByClassName("book")
if (moduleSelectBtns.length > 0) {
    for (let i = 0; i < moduleSelectBtns.length; i++) {
        let btn = moduleSelectBtns[i]
        btn.addEventListener("click", function(ev) {
            btnEl = ev.target
            cell = btnEl.parentElement
            row = cell.parentElement
            row.className = "selected"
        })
    }
    alert("moduleSelectBtns is > 0")
}


