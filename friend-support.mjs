import { createServer } from "node:http";
import { readFileSync } from "node:fs";
const server = createServer((req, res) => {
    let result = {}
    let code
    try {
        code = 200
        const data = readFileSync(`guests/${req.url}.json`, 'utf-8')
        result = data
        res.writeHead(code, { 'Content-Type': 'application/json' })
        res.end(result)
    } catch (err) {
        if (err.code == "ENOENT") {
            code = 404
            result = {
                error: "guest not found"
            }

            res.writeHead(code, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(result))
            
        } else {
            code = 500
            result = {
                error: "server failed"
            }
            res.writeHead(code, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(result))
        }
    }
    // res.end(JSON.stringify(result))
})

server.listen(5000, 'localhost', () => {
    console.log('server listening in http://localhost:5000');
})