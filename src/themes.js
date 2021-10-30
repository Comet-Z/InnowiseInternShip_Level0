import index from './index'

// * Get theme-switchers from the DOM:
const defaultTheme = document.querySelector('.default-switch')
const lightTheme = document.querySelector('.light-switch')
const darkTheme = document.querySelector('.dark-switch')
const purpleTheme = document.querySelector('.purple-switch')

// * Transform the buttons into an Array: 
let calcNumbers = Array.from(document.getElementsByTagName('button'))

// * Change themes on click:
// ? Default Theme
defaultTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'dark-theme', 'purple-theme')
    })
})
// ? Light Theme
lightTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('dark-theme', 'purple-theme')
        element.classList.add('light-theme')
    })
})
// ? Dark Theme
darkTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'purple-theme')
        element.classList.add('dark-theme')
    })
})

// ? Purple Theme
purpleTheme.addEventListener('click', () => {
    calcNumbers.forEach(element => {
        element.classList.remove('light-theme', 'dark-theme')
        element.classList.add('purple-theme')
    })
})




