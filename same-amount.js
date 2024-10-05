const sameAmount = (str, reg1, reg2) => {
    let rg1 = str.match(reg1)
    let rg2 = str.match(reg2)
    if (rg1.length === rg2.length ) return true ;
    return false
}
// console.log(sameAmount('hi', /^hi/g,/hi$/g));