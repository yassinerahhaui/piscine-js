const findIP = (str) => {
    const ipPortRegex = /(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}(:([0-9]{1,5}))?/g;

    const result = [];
    let match;

    while ((match = ipPortRegex.exec(str)) !== null) {
        const ipWithPort = match[0];
        const port = match[5];

        if (port) {
            const portNum = parseInt(port, 10);
            if (portNum >= 0 && portNum <= 65535) {
                result.push(ipWithPort);
            }
        } else {
            result.push(ipWithPort);
        }
    }

    return result.filter(ip => !/^255\.255\.255\.0$/.test(ip));
}