// This is where it all goes :)
function toggleMenu() {
    var x = document.getElementById("menu");
    var body = document.getElementsByTagName("BODY")[0];
    if (x.className === "menu-items") {
        x.className += " responsive";
        body.className += " menu-open"
    } else {
        x.className = "menu-items";
        body.className = ""
    }
}
