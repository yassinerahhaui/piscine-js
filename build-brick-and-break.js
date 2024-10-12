const build = (maximum) => {
    const body = document.body
    const setBuild = setInterval(()=> {
        const div = document.createElement('div');
        if (maximum % 3 === 2) {
            div.dataset.foundation = 'true'
        }
        div.classList.add(`brick-${maximum}`);
        div.id = `brick-${maximum}`
        div.textContent = maximum
        body.appendChild(div)
        maximum--
        if (maximum === 0) clearInterval(setBuild);
    },100)
}
const repair = (...ids) => {
    ids.forEach(id => {
        const el = document.querySelector(`.${id}`)
        if (el.hasAttribute("data-foundation")) {
            el.dataset.repaired = "in progress"
        } else {
            el.dataset.repaired = "true"
        }
    })
}
const destroy = () => {
    let last = Array.from(document.querySelectorAll("[class^='brick-']"))
    last[last.length-1].remove()
}

export {build, repair,destroy}