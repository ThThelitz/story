let pwForm = document.getElementById("set-pw-form")
let pwEntry = document.getElementById("enter-pw-form")

// Store password in local storage on submit (encoding uncertain)
// Only used in create_password
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
if (pwEntry != null) {
    pwEntry.addEventListener("submit", function(ev) {
        ev.preventDefault();
        let userInput = document.getElementById("pw").value
        let pw = localStorage.getItem("pw")
    
        if (userInput == pw) {
            window.location = "/4"
        }
        else {
            window.location = "/5"
        }
    })
}


