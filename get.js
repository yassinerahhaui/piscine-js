const get = (src,path) => {
    let pathKey = path.split(".")[-1]
    let result = ""
    for (let [key,val] of Object.entries(src)) {
        if (key === pathKey) result = val
    }
    return result
}