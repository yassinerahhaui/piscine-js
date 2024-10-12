const generateLetters = () => {

    for (let i = 0; i < 120; i++) {
        const div = document.createElement('div')
        let size = Math.floor(Math.random() * 26)
        div.textContent = String.fromCharCode(65 + size);
        div.style.fontSize = `${11+i}px`
        i < 40 ? div.style.fontWaigth = '300': i < 80 ?
             div.style.fontWaigth = '400' : div.style.fontWaigth = '600'
        document.body.appendChild(div)
    }
}

export { generateLetters }