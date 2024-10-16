const deepCopy = (target) => {
    let result;
    if (Array.isArray(target)) {
        result = [...target]
    } else {
        result = {...target}
    }
    return result
}