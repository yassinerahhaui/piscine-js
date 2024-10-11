const getArchitects = () => {
    const architects = document.getElementsByTagName('a')
    const nonArchitects = document.getElementsByTagName('span')
    return [architects,nonArchitects]
}
const getClassical = () => {
    const allA = document.querySelectorAll('a')
    let classical = [];
    let nonClassical = [];
    for (let el of allA) {
        el.className === "classical" ? classical.push(el) : nonClassical.push(el)
    }
    return [classical,nonClassical]
}

const getActive = () => {
    const elements = getClassical()
    let actives = []
    let nonActives = []
    for (let el of elements) {
        el.active ? actives.push(el) : nonActives.push(el);
    }
    return [actives,nonActives]
}

const getBonannoPisano = () => {
    const el = document.getElementById('BonannoPisano')
    const els = getActive()[0]
    return [el,els]
}