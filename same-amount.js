const sameAmount = (str, reg1, reg2) => {
    if (str.match(reg1) && str.match(reg2)) return true ;
    return false
}
// console.log(sameAmount('hi', /^hi/g,/hi$/g));