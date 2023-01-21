var object = document.getElementById("nav-menu");
var button = document.getElementById("unhide1");

button.addEventListener("click", function () {
    if (object.style.display === "none") {
        object.style.display = "block";
    } else {
        object.style.display = "none";
    }
}
);