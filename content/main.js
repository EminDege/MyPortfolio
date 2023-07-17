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
}
// -----------------------//
function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
    // language toggle
}
// ------------------------//
var words = ["Front-End Developer", "UI/UX Designer"];
var index = 0;
var changingWordElement = document.getElementById("mission");

function changeWord() {
    changingWordElement.textContent = words[index];
    index = (index + 1) % words.length;
}
setInterval(changeWord, 3000); // sec1 change word
//----------------------//
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {

    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
} // opentab on skills
//----------------------//

var secone = document.getElementById('mainSection1');
var educationBlock = document.getElementById('educationBlock');
var experienceBlock = document.getElementById('experienceBlock');
var referancesBlock = document.getElementById('referancesBlock');
var flag = document.getElementById('flag');
var navtexts = document.querySelectorAll('nav a');
var themeKey = 'themeMode';
window.addEventListener('DOMContentLoaded', () => {
    var savedTheme = localStorage.getItem(themeKey);
    console.log(savedTheme);
    if (savedTheme == 'dark') {
        toggleIcons()
        document.body.classList.add(savedTheme);
        secone.classList.toggle("darkMainColor");
        educationBlock.classList.toggle("darkBgColor");
        experienceBlock.classList.toggle("darkBgColor");
        referancesBlock.classList.toggle("darkBgColor");
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
    secone.classList.toggle("darkMainColor");
    educationBlock.classList.toggle("darkBgColor");
    experienceBlock.classList.toggle("darkBgColor");
    referancesBlock.classList.toggle("darkBgColor");
    flag.classList.toggle("whiteTextColor");
    navtexts.forEach(index => index.classList.toggle("whiteTextColor"));
    var currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem(themeKey, currentTheme);
}); //darkmode



// document.addEventListener("DOMContentLoaded", function () {
//     var myButton = document.getElementById("iconContainer");
//     myButton.click();
// }); //default darkmode
