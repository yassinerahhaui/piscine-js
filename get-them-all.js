export const getArchitects = () => {
    const architects = Array.from(document.getElementsByTagName('a'))
    const nonArchitects = Array.from(document.querySelectorAll('body > *:not(a)'))
    return [architects,nonArchitects]
}

export const getClassical = () => {
    const [architects, nonArchitects] = getArchitects()
    const classical = architects.filter(el => el.classList.contains("classical"))
    const nonClassical = architects.filter(el => !el.classList.contains("classical"))
    return [classical,nonClassical]
}
export const getActive = () => {
    const [classical,nonClassical] = getClassical()
    const active = classical.filter(el=> el.classList.contains("active"))
    const nonActive = classical.filter(el=> !el.classList.contains("active"))
    return [active,nonActive]
}

export const getBonannoPisano = () => {
    const [active, nonActive] = getActive()
    const el = document.getElementById('BonannoPisano')
    return [el,active]
}