const get = (src,path) => {
    let pathKey = path.split(".")
    let result = ""
    for (let key of pathKey) {
        if (src[key] !== "undefined") result = src[key]
    }
    return result
}

console.log(get({ key: 'value' }, 'key'));