const RNA = (str) => {
    const rnaToDna = { G: 'C', C: 'G', T: 'A', A: 'U' }
    let result = ""
    for (let c of str) {
        result += rnaToDna[c]
    }
    return result
}

const DNA = (str) => {
    
    const dnaToRna = { C: 'G', G: 'C', A: 'T', U: 'A' }
    let result = ""
    for (let c of str) {
        result += dnaToRna[c]
    }
    return result
}