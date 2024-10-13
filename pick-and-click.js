const pick = (e) => {
    let x, y = 0;
    if (e) {
        x = e.clientX
        y = e.clientY
    }
    let color = `hsl(${Math.round(x % 360)},${Math.round(x % 100)}%,50%)`
    document.body.style.backgroundColor = color
}
window.addEventListener("mousemove", (e)=> pick(e))
export {pick}