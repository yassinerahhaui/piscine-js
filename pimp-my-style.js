import {styles} from "./pimp-my-style.data.js"
let count = 0
let plus = true
export const pimp = () => {
    let ln = styles.length
    if (count >= ln) plus = false
    if (count <= 1) plus = true
    const btn = document.querySelectorAll('button.button')
    btn[0].classList.toggle(styles[count-1])
    plus ? count++ : count--
}