const getJSON = async (path, params) => {
    const paramsArg = new URLSearchParams(params).toString()
    const response = await fetch(`${path}?${paramsArg}`)
    if (!response.ok) throw new Error(response.statusText)
    try {
        const data = await response.json()
        if (data.error !== undefined) throw new Error(data.error)
        return data.data
    } catch (err) {
        throw err
    }

}