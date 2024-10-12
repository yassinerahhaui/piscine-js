export const getArchitects = () => {
    const architects = Array.from(document.getElementsByTagName('a.*'))
    const nonArchitects = Array.from(document.querySelectorAll('body > *:not(a)'))
    return [architects,nonArchitects]
}

export const getClassical = () => {
    const classical = Array.from(document.querySelectorAll('a.classical'))
    const nonClassical = Array.from(document.querySelectorAll('a:not(.classical)'))
    return [classical,nonClassical]
}
export const getActive = () => {
    const active = Array.from(document.querySelectorAll('a.classical.active'))
    const nonActive = Array.from(document.querySelectorAll('a.classical:not(.active)'))
    return [active,nonActive]
}

export const getBonannoPisano = () => {
    const el = document.getElementById('BonannoPisano')
    const els = Array.from(document.querySelectorAll('a.classical.active'))
    return [el,els]
}