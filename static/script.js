let pwForm = document.getElementById("set-pw-form")

pwForm.addEventListener("submit", function(ev) {
    // Store password in local storage on submit (encoding uncertain)
    ev.preventDefault();
    let pw = document.getElementById("pw").value
    localStorage.setItem("pw", pw)
    window.location = "/3"
})

