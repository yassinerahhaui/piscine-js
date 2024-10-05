const findExpression = (num, res= "1", sum = 1) => {
    if (num%2 === 1) return "undefined";
    if (sum > num) {
        return "undefined"
    }
    if (sum === num) return res;
    if ((sum * 2) < num) {
        sum *= 2
        res += ` ${mul2}`
        return findExpression(num, res, sum)
    } else if ((sum + 4) <= num) {
        sum += 4
        res += ` ${add4}`
        return findExpression(num,res, sum);
    }
}
// console.log(findExpression(8));
// console.log(findExpression(14));