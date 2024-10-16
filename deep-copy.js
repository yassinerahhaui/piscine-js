const deepCopy = (target) => {
    let result;
    if (Array.isArray(target)) {
        result = [...target]
    } else {
        result =  JSON.parse(JSON.stringify(target))
        return Object.keys(result).length === 0 ? {...target} : result 
    }
    return result
}