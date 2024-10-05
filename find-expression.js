const findExpression = (num, res = "1", sum = 1) => {
    if (num % 2 === 1) return "undefined";
    if (sum > num) {
        return "undefined"
    }
    if (sum === num) return res;
    return findExpression(num, res + ` ${add4}`, sum + 4) ||
        findExpression(num, res + ` ${mul2}`, sum * 2)
}
// console.log(findExpression(8));
// console.log(findExpression(14));