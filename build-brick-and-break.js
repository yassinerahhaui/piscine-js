const build = (maximum) => {
    const body = document.body
    let id = 1
    const setBuild = setInterval(()=> {
        const div = document.createElement('div');
        if (id % 3 === 2) {
            div.dataset.foundation = 'true'
        }
        div.classList.add(`brick-${id}`);
        div.id = `brick-${id}`
        div.textContent = id
        body.appendChild(div)
        id++
        if (maximum < id) clearInterval(setBuild);
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