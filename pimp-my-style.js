import {styles} from "./pimp-my-style.data.js"
let count = 0
let plus = true
export const pimp = () => {
    const btn = document.querySelectorAll('button.button')
    let ln = styles.length-1
    plus ? btn[0].classList.add(styles[count]) : btn[0].classList.remove(styles[count])
    if (count === ln) plus = false
    if (count === 0) plus = true
    plus ? count++ : count--
    // console.log(count);
}