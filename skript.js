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