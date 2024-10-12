import { styles } from "./pimp-my-style/pimp-my-style.data.js"
let count = 0
let plus = true
let ln = styles.length-1
export const pimp = () => {
    const btn = document.querySelectorAll('button.button')
    btn[0].classList.toggle(styles[count])
    // console.log(btn[0].classList.value);
    plus ? count++ : count--
    if (count >= ln) {
        plus = false
        btn[0].classList.toggle(styles[count])
        // console.log(btn[0].classList.value);
    };
    if (count <= 0) {
        plus = true
        btn[0].classList.toggle(styles[count])
        // console.log(btn[0].classList.value);
    }
}