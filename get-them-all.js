export const getArchitects = () => {
    const architects = document.getElementsByTagName('a')
    const nonArchitects = document.getElementsByTagName('span')
    return [architects,nonArchitects]
}
export const getClassical = () => {
    const allA = document.getElementsByTagName('a')
    let classical = [];
    let nonClassical = [];
    for (let el of allA) {
        el.className === "classical" ? classical.push(el) : nonClassical.push(el)
    }
    return [classical,nonClassical]
}

export const getActive = () => {
    const elements = getClassical()
    let actives = []
    let nonActives = []
    for (let el of elements) {
        el.active ? actives.push(el) : nonActives.push(el);
    }
    return [actives,nonActives]
}

export const getBonannoPisano = () => {
    const el = document.getElementById('BonannoPisano')
    const els = getActive()[0]
    return [el,els]
}