var object = document.getElementById("navmenu");
var button = document.getElementById("unhide1");

button.addEventListener("click", function () {
    if (object.style.display === "none") {
        object.style.display = "block";
    } else {
        object.style.display = "none";
    }
}
);