import {styles} from "./pimp-my-style.data.js"
let count = 0
let plus = true
export const pimp = () => {
    const btn = document.querySelectorAll('button.button')
    let ln = styles.length-1
    btn[0].classList.toggle(styles[count])
    plus ? count++ : count--
    if (count === ln) plus = false
    if (count === 0) plus = true
    // console.log(count);
}