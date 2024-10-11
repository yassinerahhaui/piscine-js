export const getArchitects = () => {
    const architects = document.querySelectorAll('a')
    const nonArchitects = document.querySelectorAll(':not(a)')
    return [architects,nonArchitects]
}
export const getClassical = () => {
    let classical = document.querySelectorAll('a.classical');
    let nonClassical = document.querySelectorAll('a:not(.classical)');
    return [classical,nonClassical]
}

export const getActive = () => {
    let classical = document.querySelectorAll('a.classical');
    let actives = []
    let nonActives = []
    for (let el of classical) {
        if (el.active) {
            actives.push(el)
        } else {
            nonActives.push(el)
        }
    }
    return [actives,nonActives]
}

export const getBonannoPisano = () => {
    const el = document.getElementById('BonannoPisano')
    const els = getActive()[0]
    return [el,els]
}