// import { colors } from "./fifty-shades-of-cold.data/fifty-shades-of-cold.data.js"
import { colors } from "./fifty-shades-of-cold.data.js"

const generateClasses = () => {
    let style = document.createElement('style')
    colors.forEach(color => {
        style.innerHTML += `.${color} {\n\tbackground: ${color};\n}\n`
    })
    document.head.appendChild(style)
}

const generateColdShades = () => {
    colors.forEach(color => {
        if (color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null) {
            let div = document.createElement('div')
            div.className = color
            div.textContent = color
            document.body.appendChild(div)
        }
    })
}

const choseShade = (e) => {
    const divs = Array.from(document.getElementsByTagName("div"))
    divs.forEach(div => {
        div.style.background = e
    });
}

export { generateClasses, generateColdShades, choseShade }