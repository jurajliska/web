const menubtn = document.querySelector(".menubtn");
const closebtn = document.getElementsByClassName("close");

menubtn.addEventListener("click", function() {
    document.getElementById("menu").style.width = "100%";
})

for (let i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener("click", function() {
        document.getElementById("menu").style.width = "0%";
    })
    
}

if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light-theme");
}
document.body.classList.add(localStorage.getItem("theme"));

const switcher = document.querySelector(".dark");

switcher.addEventListener("click", function() {
    let theme = localStorage.getItem("theme");
    
    if ( theme === "light-theme") {
        theme = "dark-theme";
        localStorage.setItem("theme", theme);
    } else {
        theme = "light-theme";
        localStorage.setItem("theme", theme);
    }
    
    let oldTheme = document.body.className;
    document.body.classList.replace(oldTheme, theme);

    //document.body.classList.toggle("light-theme");
    //document.body.classList.toggle("dark-theme");

    const className = document.body.className;
    if(className === "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
})