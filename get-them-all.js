const getArchitects = () => {
    const architects = document.querySelectorAll('a')
    const nonArchitects = document.querySelectorAll(':not(a)')
    return [architects,nonArchitects]
}
const getClassical = () => {
    let classical = document.querySelectorAll('a.classical');
    let nonClassical = document.querySelectorAll('a:not(.classical)');
    return [classical,nonClassical]
}

const getActive = () => {
    let classical = document.querySelectorAll('a.classical');
    let actives = []
    let nonActives = []
    for (let el of classical) {
        el.active === true ? actives.push(el) : nonActives.push(el);
    }
    return [actives,nonActives]
}

const getBonannoPisano = () => {
    const el = document.getElementById('BonannoPisano')
    const els = getActive()[0]
    return [el,els]
}