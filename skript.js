function menuFunction() {
    document.getElementById("menu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
        var menus = document.getElementsByClassName("menu-content");
        var i;
        for (i = 0; i < menus.length; i++){
            var openMenu = menus[i];
            if (openMenu.classList.contains('show')) {
                openMenu.classList.remove('show');
            }
        }
    }
}

const switcher = document.querySelector(".dark");

switcher.addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    const className = document.body.className;
    if(className === "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
})