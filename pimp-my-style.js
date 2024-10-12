import {styles} from "./pimp-my-style.data.js"
let count = 0
let plus = true
export const pimp = () => {
    let ln = styles.length
    const btn = document.querySelectorAll('button.button')
    btn[0].classList.toggle(styles[count])
    console.log(btn[0].classList.value);
    plus ? count++ : count--
    if (count >= ln) plus = false
    if (count <= 0) plus = true
}