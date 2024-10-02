const abs = (num) => num >= 0 ? num : -num;
const multiply = (a, b) => {
    a, b = abs(a), abs(b);
    let result = 0;
    let i = 0
    while (i < b) {
        result += a
        i++
    }
    return result
}
const divide = (a, b) => {
    a, b = abs(a), abs(b);
    let result = a;
    let i = b
    if (a === b) { return 1 }
    while (i > b) {
        result -= a
        i--
    }
    return result
}
const modulo = (a, b) => {
    a = abs(a); 
    b = abs(b);
    while (true) {
        if (a < b) {
            return a
        }
        a -= b
    }
}

// console.log(multiply(5, -5));
// console.log(divide(5, -5));
// console.log(modulo(5, 2));