const abs = (num) => num >= 0 ? num : -num;
const modulo = (a, b) => {
    let negative = false
    if (a < 0) {
        negative = true
    }
    a = abs(a); b = abs(b);
    while (true) {
        if (a < b) {
            if (negative) {
                return -a
            }
            return a
        }
        a -= b
    }
}

const round = (num) => {
    let res = modulo(num, 1)
    let negative = false
    if (res < 0) {
        negative = true
        res = -res
        num = -num
    }
    num -= res
    if (res >= 0.5) {
        num += 1
    }
    return negative ? -num : num
}
const ceil = (num) => {
    if (num === 0) return 0
    let res = modulo(num, 1)
    let negative = false
    if (res < 0) {
        negative = true
        res = -res
        num = -num
        num -= res
    } else {
        num -= res
        num++
    }
    return negative ? -num : num
}
const floor = (num) => {
    let res = modulo(num, 1)
    let negative = false
    if (res < 0) {
        negative = true
        res = -res
        num = -num
        num -= res
        num++
    } else {
        num -= res
    }


    return negative ? -num : num
}
const trunc = (num) => {
    let res = 0
    if (num > 68719476735) {
        num -= 68719476735;
        res += 68719476735;
    }
    let negative = false
    if (num < 0) {
        negative = true
        num = -num
    }
    while(num>=1){
        num -= 1
        res++
    }
    return negative ? -res : res
}

// const nums = [3.7, -3.7, 3.1, -3.1, 0]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))