export const compose = () => {
    window.addEventListener("keydown", (e) => {
        const { key } = e
        console.log(key);
        if (key === "Backspace" || key === "Delete") {
            let divs = Array.from(document.querySelectorAll('.note'))
            document.body.removeChild(divs[divs.length-1])
        } else {
            const div = document.createElement("div")
            div.className = "note"
            div.style.background = `hsl(${Math.floor(Math.random() * 360)},100%,50%)`
            div.textContent = `${key}`
            document.body.appendChild(div)
        }
        if (key === "Escape") {
            document.body.innerHTML = ''
        }
    })
}