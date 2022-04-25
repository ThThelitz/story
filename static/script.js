let pwForm = document.getElementById("pw-form")

pwForm.addEventListener("submit", function(ev) {
    // Stores password in local storage on submit
    // Saves emojis correctly, not 100% sure about encoding used
    ev.preventDefault() // does not work, but maybe I don't need it
    let pw = document.getElementById("pw").value
    localStorage.setItem("pw", pw)
})

