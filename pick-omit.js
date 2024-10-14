const pick = (obj,arr) => {
    const res = {}
    if (typeof arr === 'string') {
        if (obj[arr] !== undefined) {
            res[arr] = obj[arr]
        }
    } else {
        arr.forEach(str => {
            if (obj[str]) {
                res[str] = obj[str]
            }
        });
    }
}
const omit = (obj,arr) => {
    const res = {}
    for (let [key,val] of Object.entries(obj)) {
        if (typeof arr === 'string') {
            if (key !== arr) {
                res[key] = val
            }
        } else {
            if (!arr.includes(key)) res[key] = val;
        }
    }
}