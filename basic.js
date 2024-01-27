var crt_toggle = document.getElementById("crttoggle");
crt_toggle.addEventListener("click", function(e) {
    toggle()
});

function toggle() {
    let body_crttoggle = document.getElementById("bodycrt");
    if (localStorage.getItem("toggled") === "false") {
        localStorage.setItem("toggled", "true");
        body_crttoggle.classList.add("crt");
    } else {
        localStorage.setItem("toggled", "false");
        body_crttoggle.classList.remove("crt");
    }
}

function startup() {
    let body_crttoggle = document.getElementById("bodycrt");
    if (localStorage.getItem("toggled") === "false") {
        body_crttoggle.classList.remove("crt");
    } else {
        body_crttoggle.classList.add("crt");
    }
}

startup();