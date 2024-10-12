const build = (maximum) => {
    const body = document.body
    const setBuild = setInterval(()=> {
        const div = document.createElement('div');
        div.setAttribute('foundation','true')
        div.classList.add(`brick-${maximum}`);
        div.textContent = maximum
        body.appendChild(div)
        maximum--
        if (maximum === 0) clearInterval(setBuild);
    },100)
}
const repair = (...ids) => {
    // let els = Array.from(document.querySelectorAll("[class^='brick-']"))
    ids.forEach(id => {
        const el = document.querySelector(`.${id}`)
        let num = id.split('-')[1]
        if (Number(num) % 3 === 2) {
            el.setAttribute('repaired','in progress')
            el.textContent = "in progress"
            el.style.color = "black"
        } else {
            el.setAttribute("repaired","true")
            el.textContent = `${num}-repaired`
            el.style.color = "blue"
        }
    })
}
const destroy = () => {
    let last = Array.from(document.querySelectorAll("[class^='brick-']"))
    last = last[last.length-1]
    document.body.removeChild(last)
}

export {build, repair,destroy}