const handleDarkMode = () => {
    const htmlStructure = document.querySelector("html")
    const switchButton = document.querySelector("#themeButton")
    switchButton.addEventListener("click", () => {
        htmlStructure.classList.toggle("darkMode")
        if (htmlStructure.classList.contains("darkMode")){
            switchButton.setAttribute("src","./src/assets/sun-solid.svg")
            localStorage.setItem("@openMusic:darkMode","true")
        }
        else {
            switchButton.setAttribute("src","./src/assets/moon-solid.svg")
            localStorage.setItem("@openMusic:darkMode","false")
        }
    })
    const storedInfo = JSON.parse((localStorage.getItem("@openMusic:darkMode")))
    if (storedInfo){
        switchButton.setAttribute("src","./src/assets/sun-solid.svg")
        htmlStructure.classList.add("darkMode")
    }
    else {
        switchButton.setAttribute("src","./src/assets/moon-solid.svg")
        htmlStructure.classList.remove("darkMode")
    }
}
handleDarkMode()