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

        localStorage.setItem('themeLight', 'light-theme')
        localStorage.getItem('themeLight')
    })    
    
})


// ? Dark Theme
darkTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'purple-theme')
        element.classList.add('dark-theme')

        localStorage.setItem('themeDark', 'dark-theme')
        localStorage.getItem('themeDark')
    })
    
})

// ? Purple Theme
purpleTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'dark-theme')
        element.classList.add('purple-theme')
        
    })
})


// ! STORE THEMES IN LOCAL STORAGE :
// // ? Light Theme :
// document.onload = function loadLight() {
//     calcNumbers.forEach(element => {
//         element.classList.add(localStorage.getItem('themeLight'))
//     })
// }
// // ? Dark Theme :
// document.onload = function loadDark() {
//     calcNumbers.forEach(element => {
//         element.classList.add(localStorage.getItem('themeDark'))
//     })
// }

// window.onload = function loadPurple() {
//     calcNumbers.forEach(element => {
//         element.classList.add(localStorage.getItem('themePurple'))
//     })
// }


