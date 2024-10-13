export const compose = () => {
    window.addEventListener("keydown", (e) => {
        const { key } = e
        if (key === "Backspace" || key === "Delete") {
            let divs = Array.from(document.querySelectorAll('.note'))
            document.body.removeChild(divs[divs.length - 1])
        } else {

            if (key.match(/[a-z]/g) !== null) {
                const div = document.createElement("div")
                div.className = "note"
                div.style.background = `hsl(${Math.floor(Math.random() * 360)},100%,50%)`
                div.textContent = `${key}`
                document.body.appendChild(div)
            }
        }
        if (key === "Escape") {
            document.body.innerHTML = ''
        }
    })
}