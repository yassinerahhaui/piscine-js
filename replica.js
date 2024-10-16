const replica = (obj) => {
    if (typeof obj !== "object" || typeof obj === null || typeof obj === 'function' || obj instanceof RegExp) {
        return obj;
    }
    const result = Array.isArray(obj) ? [] : {}
    for (let [key,_] of Object.entries(obj)) {
        result[key] = replica(obj[key])
    }
    return result
}