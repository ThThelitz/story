let pwForm = document.getElementById("pw-form")

pwForm.addEventListener("submit", function(ev) {
    // Stores password in local storage on submit
    // Saves emojis correctly, not 100% sure about encoding used
    ev.preventDefault()
    let pw = document.getElementById("pw").value
    localStorage.setItem("pw", pw)
})

