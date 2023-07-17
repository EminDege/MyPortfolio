function toggleIcons() {
    var icon1 = document.getElementById("icon1");
    var icon2 = document.getElementById("icon2");

    if (icon1.style.display === "none") {
        icon1.style.display = "inline-block";
        icon2.style.display = "none";
    } else {
        icon1.style.display = "none";
        icon2.style.display = "inline-block";
    } //theme button switcher
} //--------------------//

function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}// language toggle
//-----------------------//

var contactSection = document.getElementById('contactSection');
var flag = document.getElementById('flag');
var navtexts = document.querySelectorAll('nav a');
var themeKey = 'themeMode';
window.addEventListener('DOMContentLoaded', () => {
    var savedTheme = localStorage.getItem(themeKey);
    if (savedTheme == 'dark') {
        toggleIcons()
        document.body.classList.add(savedTheme);
        contactSection.classList.toggle("darkMainColor");
        flag.classList.toggle("whiteTextColor");
        navtexts.forEach(index => index.classList.toggle("whiteTextColor"));
    }
    else if (savedTheme == null) {
        document.getElementById("iconContainer").click();
        toggleIcons()
    }

});

document.getElementById('iconContainer').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    contactSection.classList.toggle("darkMainColor");
    flag.classList.toggle("whiteTextColor");
    navtexts.forEach(index => index.classList.toggle("whiteTextColor"));
    var currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem(themeKey, currentTheme);
}); //darkmode

//----------------------//
// document.addEventListener("DOMContentLoaded", function () {
//     var myButton = document.getElementById("iconContainer");
//     myButton.click();
// }); //default darkmode
//-----------------------//