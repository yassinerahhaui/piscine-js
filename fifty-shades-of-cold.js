// import { colors } from "./fifty-shades-of-cold.data/fifty-shades-of-cold.data.js"
import { colors } from "./fifty-shades-of-cold.data.js"
const generateClasses = () => {
    let style = document.createElement('style')
    let textStyle = ""
    colors.map(color=> {
        let item = `.${color} {\n\t background-color: ${color};\n}\n`
        textStyle += item
    })
    style.innerText = textStyle
    document.head.appendChild(style)
}

const generateColdShades = () => {
    colors.map(color => {
        let div = document.createElement('div')
        div.className = color
        // div.style.backgroundColor = color
        div.textContent = color
        document.body.appendChild(div)
    })
}

const choseShade = (e) => {
    const divs = Array.from(document.getElementsByTagName("div"))
    divs.forEach(div => {
        div.style.backgroundColor = e
    });
}

export {generateClasses, generateColdShades, choseShade}