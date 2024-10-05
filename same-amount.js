const sameAmount = (str, reg1, reg2) => {
    let rg1 = RegExp(reg1,'g')
    let rg2 = RegExp(reg2,'g')
    let regex1 = str.match(rg1) || []
    let regex2 = str.match(rg2) || []
    if (regex1.length === regex2.length ) return true ;
    return false
}
// console.log(sameAmount('hi2', /^hi/,/hi$/));