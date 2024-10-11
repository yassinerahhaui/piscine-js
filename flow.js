

const square = (nbr) => nbr * nbr
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2
const flow = (funcs) => {
    return (...args) => {
        const res = funcs[0](...args)
        return funcs[1](res)
    }
}
const flowedFunctions = flow([add2Numbers, square])
console.log(flowedFunctions(2, 3) )// -> 25