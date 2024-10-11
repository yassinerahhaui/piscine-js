const flow = (funcs) => {
    return (...args) => {
        return funcs.reduce((result, func) => {
            result = Array.isArray(result) ? func(...result) : func(result)
            return result
        }, args)
    }

}

/*
const square = (nbr) => nbr * nbr
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2
const flowedFunctions = flow([add2Numbers, square])
console.log(flowedFunctions(2, 3))// -> 25
*/