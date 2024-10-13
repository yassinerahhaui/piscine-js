import { styles } from "./pimp-my-style.data.js"
let count = 0
export const pimp = () => {
    const btn = document.querySelectorAll('button.button')[0]
    const cls = btn.classList
    if (cls.contains("unpimp")) {
        count--
        cls.remove(styles[count]);
        if (count === 0) cls.toggle("unpimp")
    } else {
        cls.add(styles[count]);
        count++
    }
    if (count === styles.length) {
        cls.toggle('unpimp')
    };
}