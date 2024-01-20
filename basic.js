var crt_toggle = document.getElementById("crttoggle");
crt_toggle.addEventListener("click", function(e) {
    var body_crttoggle = document.getElementById("bodycrt");
    if (body_crttoggle.classList.contains('crt')) {
        body_crttoggle.classList.remove("crt");
    } else {
        body_crttoggle.classList.add("crt");
    }
});