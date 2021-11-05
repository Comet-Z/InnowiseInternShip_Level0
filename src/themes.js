import { main } from "./index";
import { css } from "./styles/style.css";

// * Get theme-switchers from the DOM:
const defaultTheme = document.querySelector('.default-switch')
const lightTheme = document.querySelector('.light-switch')
const darkTheme = document.querySelector('.dark-switch')
const purpleTheme = document.querySelector('.purple-switch')

const themes = [defaultTheme, lightTheme, darkTheme, purpleTheme]

// * Transform the buttons into an Array: 
let calcNumbers = Array.from(document.getElementsByTagName('button'))

// * Change themes on click:
// ? Default Theme
defaultTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'dark-theme', 'purple-theme')
        localStorage.clear()
    })
    
})
// ? Light Theme
lightTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('dark-theme', 'purple-theme')
        element.classList.add('light-theme') 

        localStorage.clear()
        localStorage.setItem('themeLight', 'light-theme')
    })    
    
})

// ? Dark Theme
darkTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'purple-theme')
        element.classList.add('dark-theme')

        localStorage.clear()
        localStorage.setItem('themeDark', 'dark-theme')
    })
    
})

// ? Purple Theme
purpleTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'dark-theme')
        element.classList.add('purple-theme')

        localStorage.clear()
        localStorage.setItem('themePurple', 'purple-theme')        

    })
})


// * LOAD THEMES FROM LOCAL STORAGE :
if (localStorage.key(0) == "themeLight") {
    calcNumbers.forEach(element => {
        element.classList.remove('dark-theme', 'purple-theme')
        element.classList.add('light-theme') 
    })    
}

else if (localStorage.key(0) == "themeDark") {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'purple-theme')
        element.classList.add('dark-theme')
    })
}

else if(localStorage.key(0) == "themePurple") {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'dark-theme')
        element.classList.add('purple-theme')
    })
}
