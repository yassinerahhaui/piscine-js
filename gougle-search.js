const queryServers = (serverName, q) => {
    const url = getJSON(`/${serverName}?q=${q}`)
    const url_backup = getJSON(`/${serverName}_backup?q=${q}`)
    let res = Promise.race([url,url_backup])
    return res
}

const gougleSearch = async (q) => {
    try {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('timeout')), 80);
        });

        const web = queryServers("web", q);
        const image = queryServers("image", q);
        const video = queryServers("video", q);

        const [webCur, imageCur, videoCur] = await Promise.race([
            Promise.all([web, image, video]),
            timeoutPromise
        ]);

        return { web: webCur, image: imageCur, video: videoCur };
    } catch (error) {
        throw error;
    }
}


// console.log(queryServers('pouet', 'hello+world'));

// return the fastest of those 2 calls:
// -> getJSON('/pouet?q=hello+world')
// -> getJSON('/pouet_backup?q=hello+world')