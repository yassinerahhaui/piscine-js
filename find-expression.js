let res = "1"
// const add4 = "+4"
// const mul2 = "*2"
let sum = 1
const findExpression = (num) => {
    if (num%2 === 1) return undefined;
    if (sum >= num) {
        return res
    }
    if ((sum * 2) < num) {
        sum *= 2
        res += ` ${mul2}`
        return findExpression(num)
    } else if ((sum + 4) <= num) {
        sum += 4
        res += ` ${add4}`
        return findExpression(num);
    } 
    // return findExpression(num);
}
// console.log(findExpression(8));