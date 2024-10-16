const deepCopy = (target) => {
    let result;
    if (Array.isArray(target)) {
        result = [...target]
    } else {
        return JSON.parse(JSON.stringify(target))
    }
    return result
}